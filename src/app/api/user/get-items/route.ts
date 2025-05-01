import { ApiResponse } from "@/lib/ApiResponse";
import { mongoDb } from "@/lib/dbConnect";
import { ApiError } from "@/lib/ErrorResponse";
import Item from "@/models/items.model";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await mongoDb();
    const allItems = await Item.find({}).sort({ createdAt: -1 });
    if (!allItems || allItems.length === 0) {
      return NextResponse.json(new ApiError(404, "No Item data found"), {
        status: 404,
      });
    }
    return NextResponse.json(
      new ApiResponse(200, allItems, "Item data fetched successfully"),
      { status: 200 }
    );
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      new ApiError(500, "Internal server error while fetching item data"),
      { status: 500 }
    );
  }
}
