import { users } from "@/lib/db";
import { NextResponse } from "next/server";
export const GET = async (req, par) => {
  try {
    const id = req.url.split("third/")[1];
    console.log(id);
    const user = users.find((u, i) => u.id.toString() === id);
    if (!user) {
      return NextResponse.json(
        { message: "user not found", success: false },
        { status: 404 }
      );
    }
    return NextResponse.json(user, { status: 200 });
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { message: "Internal server error", success: false },
      { status: 500 }
    );
  }
};

export const DELETE = async (req, par) => {
  try {
    const id = req.url.split("third/")[1];
    console.log(id);
    const user = users.filter((u, i) => u.id.toString() != id);
    if (!user) {
      return NextResponse.json(
        { message: "user not found", success: false },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { message: "user deleted successfully", success: true },
      { status: 200 }
    );
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { message: "Internal server error", success: false },
      { status: 500 }
    );
  }
};

export const PUT = async (req, par) => {
  const { realName } = await req.json();

  try {
    const id = req.url.split("third/")[1];
    // const user = users.filter((u, i) => u.id.toString() != id);

    const updateUser = users.map((u, i) => {
      if (u.id.toString() === id) {
        return { ...u, realName };
      }
      return u;
    });

    // if (!user) {
    //   return NextResponse.json(
    //     { message: "user not found", success: false },
    //     { status: 404 }
    //   );
    // }
    return NextResponse.json(
      { message: "user updated successfully", updateUser, success: true },
      { status: 200 }
    );
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { message: "Internal server error", success: false },
      { status: 500 }
    );
  }
};
