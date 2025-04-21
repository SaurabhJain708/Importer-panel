import { ApiResponse } from "@/lib/ApiResponse";
import { mongoDb } from "@/lib/dbConnect";
import { ApiError } from "@/lib/ErrorResponse";
import Category from "@/models/category.model";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  await mongoDb();
  try {
    const { name, description, coverImage, parentCategory } = await req.json();
    if (!name || !description || !coverImage) {
      return NextResponse.json(new ApiError(400, "All fields are necessary"), {
        status: 400,
      });
    }
    const existingCategory = await Category.findOne({ name, parentCategory:parentCategory || null });
    if (existingCategory) {
      return NextResponse.json(new ApiError(400, "Category already exists"), {
        status: 400,
      });
    }
    const newCategory = await Category.create({
      name,
      description,
      coverImage,
      parentCategory:parentCategory || null,
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
    return NextResponse.json(new ApiError(500, "Something went wrong"),{status:500});
  }
}
