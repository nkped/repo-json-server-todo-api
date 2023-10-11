import { NextResponse } from "next/server"

const DATA_RESOURCE = process.env.RESOURCE_URL as string
const API_KEY = process.env.SECRET_KEY as string

export async function GET(request: Request) {
    console.log('get request from route: ', request.url)
    const res = await fetch(DATA_RESOURCE, {next: {revalidate: 0}})
    const todos: Todo[] = await res.json()
    console.log('todos result from route: ', todos)

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
    const body: Todo = await request.json()

   const res = await fetch(DATA_RESOURCE, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
            'API-Key': API_KEY
        },
        body: JSON.stringify(body)
    })

    const result = await res.json()

    console.log('message: result from api post route:', result)

    return NextResponse.json(result)
}


//userId, title, completed, id













/* export async function POST(request: Request) {
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

    console.log('this is newTodo from route: ', newTodo)

    return NextResponse.json(newTodo)
} */


export async function PUT(request: Request) {
    console.log('put request from route: ', request.body)

    const { userId, id, title, completed }: Todo = await request.json()

    await fetch(`${DATA_RESOURCE}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'API-Key': API_KEY
        },
        body: JSON.stringify({ userId, id, title, completed })
    })

    /* const updatedTodo: Todo = await res.json()

    return NextResponse.json(updatedTodo)
 */

}