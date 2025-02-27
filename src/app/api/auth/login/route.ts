import { createResponse } from "@/app/types";
import { NextRequest, NextResponse } from "next/server";
import { connectToMongodb } from "@/config/configdb";
import User from "@/services/models/User";

export async function POST(req: NextRequest) {
  try {
    await connectToMongodb();
    const { username, password } = await req.json();
    const user = await User.findOne({ username });
    if (!user) {
      return NextResponse.json(createResponse<null>(400, "User not exists"));
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 401 }
      );
    }

    return NextResponse.json({ message: "Login successful", user });
  } catch (error) {
    return NextResponse.json(
      createResponse<null>(
        500,
        error instanceof Error ? error.message : "An unknown error occurred"
      )
    );
  }
}
