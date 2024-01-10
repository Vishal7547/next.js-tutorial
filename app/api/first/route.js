// export async function GET() {
//   return new Response("hello world");
// }

import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json(
    {
      message: "hello world",
      age: 23,
    },
    { status: 200 }
  );
}
