import { ApiResponse } from "@/lib/ApiResponse";
import { mongoDb } from "@/lib/dbConnect";
import { ApiError } from "@/lib/ErrorResponse";
import Category from "@/models/category.model";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    await mongoDb();
    const allCategories = await Category.find({}).sort({ createdAt: -1 });
    if (!allCategories || allCategories.length === 0) {
      return NextResponse.json(new ApiError(404, "No category data found"), {
        status: 404,
      });
    }

    return NextResponse.json(
      new ApiResponse(200, allCategories, "Contact data fetched successfully"),
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      new ApiError(500, "Internal server error while fetching item data"),
      { status: 500 }
    );
  }
}
