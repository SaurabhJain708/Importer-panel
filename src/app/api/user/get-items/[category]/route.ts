import { ApiResponse } from "@/lib/ApiResponse";
import { mongoDb } from "@/lib/dbConnect";
import { ApiError } from "@/lib/ErrorResponse";
import Item from "@/models/items.model";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  _req: NextRequest,
  { params }: { params: { category: string } }
) {
  try {
    await mongoDb();

    const { category } = params;

    const categoryItems = await Item.find({ category }).sort({ createdAt: -1 });

    if (!categoryItems || categoryItems.length === 0) {
      return NextResponse.json(new ApiError(404, "No Item data found"), {
        status: 404,
      });
    }

    return NextResponse.json(
      new ApiResponse(200, categoryItems, "Item data fetched successfully"),
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      new ApiError(500, "Internal server error while fetching category item data"),
      { status: 500 }
    );
  }
}
