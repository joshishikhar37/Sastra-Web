
import User from "@/models/user";
import { NextResponse } from "next/server";


export async function POST(req) {
  try {
    const { Text } = await req.json();
 
    await localStorage();
    await User.create({ Text });

    return NextResponse.json({ message: "Text Edited." }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while Editing." },
      { status: 500 }
    );
  }
}
