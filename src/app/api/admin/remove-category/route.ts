import { mongoDb } from "@/lib/dbConnect";
import { ApiError } from "@/lib/ErrorResponse";
import { ApiResponse } from "@/lib/ApiResponse";
import { NextRequest, NextResponse } from "next/server";
import Category from "@/models/category.model";

export async function POST(req: NextRequest) {
  try {
    await mongoDb();

    const { categoryId } = await req.json();

    if (!categoryId) {
      return NextResponse.json(
        new ApiError(400, "Category ID is required"),
        { status: 400 }
      );
    }

    const categoryRemoved = await Category.findOneAndDelete({ _id: categoryId });

    if (!categoryRemoved) {
      return NextResponse.json(
        new ApiError(404, "Category not found, Deletion failed"),
        { status: 404 }
      );
    }

    return NextResponse.json(
      new ApiResponse(200, null, "Category removed successfully")
    );
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      new ApiError(500, "Internal server error, Category not removed"),
      { status: 500 }
    );
  }
}
