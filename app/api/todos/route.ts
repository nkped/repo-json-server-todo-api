import { NextResponse } from "next/server"
const DATA_RESOURCE = process.env.RESOURCE_URL as string
const API_KEY = process.env.SECRET_KEY

export async function GET() {
    const res = await fetch(DATA_RESOURCE)
    const todos: Todo[] = await res.json()

    return NextResponse.json(todos)
}