import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json(
    {
      message: "Second",
      age: 23,
    },
    { status: 200 }
  );
}
