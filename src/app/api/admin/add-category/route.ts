import { ApiResponse } from "@/lib/ApiResponse";
import { uploadOnCloudinary } from "@/lib/Cloudinary";
import { mongoDb } from "@/lib/dbConnect";
import { ApiError } from "@/lib/ErrorResponse";
import { parseFormData } from "@/lib/parseFormData";
import Category from "@/models/category.model";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  await mongoDb();
  try {
    const { fields, files } = await parseFormData(req);
    const { name, description, parentCategory } = fields;

    if (!name || !description || !files.file) {
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

    const file = Array.isArray(files.file) ? files.file : [files.file];

    // File validation: check for allowed types and size (example: image/jpeg, image/png)
    const allowedTypes = ["image/jpeg", "image/png"];
    const maxSize = 10 * 1024 * 1024; // 10 MB

    for (const e of file) {
      if (!allowedTypes.includes(e.mimetype!)) {
        return NextResponse.json(new ApiError(400, "Invalid file type"), {
          status: 400,
        });
      }
      if (e.size > maxSize) {
        return NextResponse.json(new ApiError(400, "File size exceeds limit"), {
          status: 400,
        });
      }
    }

    // Upload files to Cloudinary
    const uploadCloudinary = file.map((e: any) => uploadOnCloudinary(e));
    const uploadedFiles = await Promise.all(uploadCloudinary);

    if (!uploadedFiles || uploadedFiles.length === 0) {
      return NextResponse.json(new ApiError(400, "File upload failed"), {
        status: 400,
      });
    }

    const url = uploadedFiles[0]?.url;

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
