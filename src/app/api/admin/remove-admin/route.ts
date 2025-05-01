import { ApiResponse } from "@/lib/ApiResponse";
import { mongoDb } from "@/lib/dbConnect";
import { ApiError } from "@/lib/ErrorResponse";
import { User } from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await mongoDb();
    const { userId } = await req.json();
    const removedAdmin = await User.findOneAndUpdate(
      { _id: userId },
      { isAdmin: false },
      { new: true }
    );
    if (!removedAdmin) {
      return NextResponse.json(new ApiError(404, "Admin not removed"), {
        status: 500,
      });
    }
    return NextResponse.json(
      new ApiResponse(200, null, "Admin removed successfully")
    );
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      new ApiError(500, "Internal server error, Admin not removed"),
      {
        status: 500,
      }
    );
  }
}
