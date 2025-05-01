import { ApiResponse } from "@/lib/ApiResponse";
import { mongoDb } from "@/lib/dbConnect";
import { ApiError } from "@/lib/ErrorResponse";
import { User } from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await mongoDb();
    const { userId } = await req.json();
    const userToBeUpdated = await User.findOneAndUpdate(
      { _id: userId },
      { isAdmin: true },
      { new: true }
    );
    if (!userToBeUpdated) {
      return NextResponse.json(new ApiError(404, "Admin not added"), {
        status: 500,
      });
    }
    return NextResponse.json(
      new ApiResponse(200, null, "User updated successfully")
    );
  } catch (error) {
    console.log(error)
    return NextResponse.json(new ApiError(500, "Internal server error"), {
      status: 500,
    });
  }
}
