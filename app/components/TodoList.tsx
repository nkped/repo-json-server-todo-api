import React from 'react'
import Todo from './Todo'
import { fetchTodoList } from '@/lib/fetchTodoList'


const TodoList = async () => {

    const todos: Todo[] = await fetchTodoList()

  return (
    <ul>{todos.map((todo) => (<Todo key={todo.id} todo={{...todo}}/>))}</ul>
  )
}

export default TodoList