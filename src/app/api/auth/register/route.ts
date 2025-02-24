import { createResponse } from "@/app/types";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { username, password } = await req.json();

    if (username === "admin" && password === "123456") {
      const response = createResponse(200, "register successful");
      return NextResponse.json(response);
    }

    return NextResponse.json(createResponse<null>(200, "Invalid credentials"), {
      status: 401,
    });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json(createResponse<null>(500, "Server error"), {
      status: 500,
    });
  }
}
