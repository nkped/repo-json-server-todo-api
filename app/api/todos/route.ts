import { NextResponse } from "next/server"


const DATA_RESOURCE = process.env.RESOURCE_URL as string


export async function GET(request: Request) {    

    console.log('get request from route: ', request.url)
    
    const res = await fetch(DATA_RESOURCE, {next: {revalidate: 0}})
    const todos: Todo[] = await res.json()
   // console.log('todos result from route: ', todos)

    return NextResponse.json(todos)
}


export async function DELETE(request: Request) {

    const {id}: Partial<Todo> = await request.json()

    await fetch(`${DATA_RESOURCE}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    return NextResponse.json({"message": `Todo ${id} was deleted..`})
}


export async function POST(request: Request) {

    const body: Todo = await request.json()
    console.log('post requestbody from route: ', body)

    const res = await fetch(DATA_RESOURCE, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })

    const result = await res.json()
    console.log('message: result from api post route:', result)

    return NextResponse.json(result)
}



export async function PATCH(request: Request) {

    const { completed, id }  = await request.json()
    console.log('patch requestbody from route: ', id, completed)

    const res = await fetch(`${DATA_RESOURCE}/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({'completed': completed})
    })

    const result = await res.json()
    console.log('result from patch route:', result)

    return NextResponse.json(result)
}