import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json(
    {
      name: "vishal kumar",
      age: 23,
    },
    { status: 200 }
  );
}
