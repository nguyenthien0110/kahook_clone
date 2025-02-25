import { createResponse } from "@/app/types";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { username, password } = await req.json();

    if (username === "admin" && password === "123456") {
      const response = createResponse(200, "Login successful", {
        token: "fake-jwt-token",
      });
      return NextResponse.json(response);
    }

    return NextResponse.json(createResponse<null>(400, "Invalid credentials"));
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json(createResponse<null>(500, "Server error"), {
      status: 500,
    });
  }
}
