export async function fetchTodoList() {
    const res = await fetch('http://localhost:3000/api/todos', {next: {revalidate: 0}})

    const todos: Todo[] = await res.json()
    console.log(todos)

    return todos
}