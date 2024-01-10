import { users } from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async (req, res) => {
  try {
    return NextResponse.json(users, { status: 200 });
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { message: "Internal server error", success: false },
      { status: 500 }
    );
  }
};

export const POST = async (req, res) => {
  const { userName, realName } = await req.json();

  try {
    const newData = { realName, userName };
    newData.id = users.length + 1;
    newData.userName = `${userName}${users.length + 1}`;
    users.push(newData);
    return NextResponse.json({ newData, success: true }, { status: 200 });
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { message: "Internal server error", success: false },
      { status: 500 }
    );
  }
};
