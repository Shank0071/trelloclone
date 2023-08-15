import { NextResponse } from "next/server";
import openai from "@/openai";

export async function POST(request: Request) {
    const { todos } = await request.json();

    return NextResponse.json({todos});
}