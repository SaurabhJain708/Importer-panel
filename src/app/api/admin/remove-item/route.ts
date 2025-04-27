import { mongoDb } from "@/lib/dbConnect";
import Item from "@/models/items.model";
import { ApiError } from "@/lib/ErrorResponse";
import { ApiResponse } from "@/lib/ApiResponse";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await mongoDb();

    const { itemId } = await req.json();

    if (!itemId) {
      return NextResponse.json(
        new ApiError(400, "Item ID is required"),
        { status: 400 }
      );
    }

    const itemRemoved = await Item.findOneAndDelete({ _id: itemId });

    if (!itemRemoved) {
      return NextResponse.json(
        new ApiError(404, "Item not found, Deletion failed"),
        { status: 404 }
      );
    }

    return NextResponse.json(
      new ApiResponse(200, null, "Item removed successfully")
    );
  } catch (error) {
    return NextResponse.json(
      new ApiError(500, "Internal server error, Item not removed"),
      { status: 500 }
    );
  }
}
