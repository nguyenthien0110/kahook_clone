import { createResponse } from "@/app/types";
import { NextRequest, NextResponse } from "next/server";
import User from "@/services/models/User";
import { v4 as uuidv4 } from "uuid";
import { connectToMongodb } from "@/config/configdb";

export async function POST(req: NextRequest) {
  try {
    await connectToMongodb();
    const { username, password } = await req.json();
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return NextResponse.json(
        createResponse<null>(400, "User already exists")
      );
    }
    const newUser = await User.create({
      id: uuidv4(),
      username: username,
      password: password,
    });
    await newUser.save();
    return NextResponse.json(createResponse(200, "register successful"));
  } catch (error) {
    return NextResponse.json(
      createResponse<null>(
        500,
        error instanceof Error ? error.message : "An unknown error occurred"
      )
    );
  }
}
