
import { NextResponse } from "next/server";
import { findMany } from "@/persistance";

 export async function GET () {
    const users = await findMany()
    return NextResponse.json(users)
}