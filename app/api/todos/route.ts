import { NextResponse } from "next/server"
const DATA_RESOURCE = process.env.RESOURCE_URL as string
const API_KEY = process.env.SECRET_KEY as string

export async function GET() {
    const res = await fetch(DATA_RESOURCE)
    const todos: Todo[] = await res.json()

    return NextResponse.json(todos)
}


export async function DELETE(request: Request) {

    const {id}: Partial<Todo> = await request.json()

    await fetch(`${DATA_RESOURCE}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'API-Key': API_KEY
        }
    })

    return NextResponse.json({"message": `Todo ${id} was deleted..`})
}


export async function POST(request: Request) {
    const { userId, title }: Partial<Todo> = await request.json()

    const res = await fetch(DATA_RESOURCE, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
            'API-Key': API_KEY
        },
        body: JSON.stringify({ userId, title, 'completed': false })
    })

    const newTodo: Todo = await res.json()

    return NextResponse.json(newTodo)
}


export async function PUT(request: Request) {
    const { userId, id, title, completed }: Todo = await request.json()

    const res = await fetch(`${DATA_RESOURCE}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'API-Key': API_KEY
        },
        body: JSON.stringify({ userId, title, completed })
    })

    const updatedTodo: Todo = await res.json()

    return NextResponse.json(updatedTodo)


}