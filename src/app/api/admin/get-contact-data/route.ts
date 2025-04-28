import { mongoDb } from "@/lib/dbConnect";
import { ContactData } from "@/models/contactData.model";
import { ApiResponse } from "@/lib/ApiResponse";
import { ApiError } from "@/lib/ErrorResponse";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    await mongoDb();

    const contactData = await ContactData.find({}).sort({ createdAt: -1 });

    if (!contactData || contactData.length === 0) {
      return NextResponse.json(
        new ApiError(404, "No contact data found"),
        { status: 404 }
      );
    }

    return NextResponse.json(
      new ApiResponse(200, contactData, "Contact data fetched successfully"),
      { status: 200 }
    );
    
  } catch (error) {
    return NextResponse.json(
      new ApiError(500, "Internal server error while fetching contact data"),
      { status: 500 }
    );
  }
}
