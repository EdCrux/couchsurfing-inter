

import { NextRequest, NextResponse } from "next/server";
import { findFirst } from "@/persistance";

 export async function GET ( { params}: {params: {id : string}}) {

    // In this case the ideal case is to focus on validate the data.
    const {id } = params ?? ''

    if (id === '') {
        throw new Error("Something went wrong")
    }

    const users = await findFirst({
        where: {
            id: Number(id)
        }
    })

    return NextResponse.json(users)
}