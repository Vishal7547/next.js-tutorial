import { NextResponse } from "next/server";

export function GET(req) {
  const { searchParams } = new URL(req.url);
  //   const name = searchParams.get("name");
  //   const age = searchParams.get("age");
  //   console.log(name, age);
  //   console.log(searchParams);

  const obj = Object.fromEntries(searchParams.entries());
  console.log(obj);

  return NextResponse.json({ obj }, { status: 200 });
}
