import { NextResponse } from "next/server";

const DATA_RESOURCE = process.env.RESOURCE_URL as string
const API_KEY = process.env.SECRET_KEY as string


export async function GET(request: Request) {
    const id = request.url.slice(request.url.lastIndexOf('/') + 1)

    const res = await fetch(`${DATA_RESOURCE}/${id}`)

    const todo: Todo = await res.json()

    return NextResponse.json(todo)
     
}