import { ApiResponse } from "@/lib/ApiResponse";
import { mongoDb } from "@/lib/dbConnect";
import { ApiError } from "@/lib/ErrorResponse";
import { UploadFile } from "@/lib/uploadFile";
import Item from "@/models/items.model";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  await mongoDb();
  try {
    const data = await req.formData();
    const name = data.get("name");
    const description = data.get("description");
    const price = data.get("price");
    const stock = data.get("stock");
    const isInStock = data.get("isInStock") === "true";
    const category = data.get("category");
    const vendor = data.get("vendor");
    const fileU = data.get("file");

    if (!name || !description || !category) {
      return NextResponse.json(
        new ApiError(400, "Please fill the required fields")
      );
    }

    const uploadToCloud = await UploadFile(fileU as File);
    const coverUrl = uploadToCloud ? uploadToCloud[0] : "";
    const supportingurls = uploadToCloud ? uploadToCloud.slice(1) : [];

    const newItem = await Item.create({
      name,
      description,
      price: price ?? null,
      stock: stock ?? null,
      isInStock: isInStock ?? true,
      coverImage: coverUrl,
      supportingImages: supportingurls ?? null,
      category,
      vendor: vendor ?? "Anantya Overseas",
    });

    if (!newItem) {
      return NextResponse.json(new ApiError(500, "Internal server error"), {
        status: 500,
      });
    }

    return NextResponse.json(
      new ApiResponse(201, newItem, "Item created successfully"),
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(new ApiError(500, "Something went wrong"), {
      status: 500,
    });
  }
}
