import { users } from "@/lib/db";

import { NextResponse } from "next/server";

export function GET(req, par) {
  //   console.log(par.params.id);
  const user = users.find((u, i) => u.id === par.params.id);
  if (!user) {
    return NextResponse.json({ message: "no user found" }, { status: 404 });
  }
  return NextResponse.json(user, { status: 200 });
}
