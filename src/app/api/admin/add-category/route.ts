import { ApiResponse } from "@/lib/ApiResponse";
import { mongoDb } from "@/lib/dbConnect";
import { ApiError } from "@/lib/ErrorResponse";
import { UploadFile } from "@/lib/uploadFile";
import Category from "@/models/category.model";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  await mongoDb();
  try {
    const data  = await req.formData()
    const name =  data.get("name"); 
    const description = data.get("description");
    const fileU = data.get("file")
    const parentCategory = data.get("parentCategory")
    if (!name || !description || !fileU) {
      return NextResponse.json(new ApiError(400, "All fields are necessary"), {
        status: 400,
      });
    }

    const existingCategory = await Category.findOne({
      name,
      parentCategory: parentCategory || null,
    });
    if (existingCategory) {
      return NextResponse.json(new ApiError(400, "Category already exists"), {
        status: 400,
      });
    }

    const UploadedUrlArray:string[] | null =  await UploadFile(fileU as File)
    const url = UploadedUrlArray ? UploadedUrlArray[0] : ""
    // Create a new category with the uploaded cover image
    const newCategory = await Category.create({
      name,
      description,
      coverImage: url,
      parentCategory: parentCategory || null,
    });

    if (!newCategory) {
      return NextResponse.json(new ApiError(500, "Internal server error"), {
        status: 500,
      });
    }

    return NextResponse.json(
      new ApiResponse(201, newCategory, "Category created successfully"),
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(new ApiError(500, "Something went wrong"), {
      status: 500,
    });
  }
}
