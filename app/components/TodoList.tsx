import React from 'react'

import { fetchTodoList } from '@/lib/fetchTodoList'
import TodoItem from './TodoItem'


const TodoList = async () => {
    const res = await fetchTodoList()

    const todos: Todo[] = await res.json()

    const content = (

        <>
            {todos.map((todo) => (
                <TodoItem key={todo.id} {...todo} />

            ))}
        </>
    )

  return content
}

export default TodoList