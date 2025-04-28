import { ApiResponse } from "@/lib/ApiResponse";
import { uploadOnCloudinary } from "@/lib/Cloudinary";
import { ApiError } from "@/lib/ErrorResponse";
import { parseFormData } from "@/lib/parseFormData";
import Item from "@/models/items.model";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { fields, files } = await parseFormData(req);
    const { name, description, price, stock, isInStock, category, vendor } =
      fields;

    if (!name || !description || !category || !vendor) {
      return NextResponse.json(
        new ApiError(400, "Please fill the required fields")
      );
    }

    const fileToBeUploaded = Array.isArray(files.file)
      ? files.file
      : [files.file];

    // File validation: check for allowed types and size (example: image/jpeg, image/png)
    const allowedTypes = ["image/jpeg", "image/png"];
    const maxSize = 10 * 1024 * 1024; // 10 MB

    for (const e of fileToBeUploaded) {
      if (!allowedTypes.includes(e?.mimetype!)) {
        return NextResponse.json(new ApiError(400, "Invalid file type"), {
          status: 400,
        });
      }

      if (e?.size! > maxSize) {
        return NextResponse.json(new ApiError(400, "File size exceeds limit"), {
          status: 400,
        });
      }
    }

    const upload = fileToBeUploaded.map((e: any) => uploadOnCloudinary(e));
    const uploadedFiles = await Promise.all(upload);

    if (!uploadedFiles || uploadedFiles.length === 0) {
      return NextResponse.json(new ApiError(400, "File upload failed"), {
        status: 400,
      });
    }

    const coverUrl = uploadedFiles[0]?.url;
    const supportingurls = uploadedFiles.slice(0).map((file:any)=>file.url);

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
