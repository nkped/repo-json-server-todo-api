import React from 'react'
import Link from 'next/link'
import Checkbox from './Checkbox'


const TodoItem = (todo: Todo) => {
  return (
    <form>
        <Link href={`http://localhost:3000/api/todos/${todo.id}`}>{todo.title}</Link>
        <Checkbox todo={todo}/>
    </form>
  )
}

export default TodoItem