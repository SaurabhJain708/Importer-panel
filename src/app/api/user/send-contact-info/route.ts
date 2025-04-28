import { ApiResponse } from "@/lib/ApiResponse";
import { mongoDb } from "@/lib/dbConnect";
import { ApiError } from "@/lib/ErrorResponse";
import { ContactData } from "@/models/contactData.model";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await mongoDb();
    const {
      name,
      email,
      phone,
      address,
      country,
      companyName,
      website,
      productsOrServices,
      message,
    } = await req.json();
    if (
      !name ||
      !email ||
      !phone ||
      !address ||
      !country ||
      !productsOrServices ||
      !companyName
    ) {
      return NextResponse.json(new ApiError(400, "All fields are necessary"), {
        status: 400,
      });
    }
    const newContactReq = await ContactData.create({
      name,
      email,
      phone,
      address,
      country,
      companyName,
      website,
      productsOrServices,
      message,
    });

    if (!newContactReq) {
      return NextResponse.json(
        new ApiError(
          500,
          "Internal server error while creating contact request"
        ),
        {
          status: 500,
        }
      );
    }

    return NextResponse.json(
      new ApiResponse(201, null, "Request created successfully"),
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(new ApiError(500, "Something went wrong"), {
      status: 500,
    });
  }
}
