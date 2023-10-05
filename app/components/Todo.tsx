import React from 'react'

const Todo = ({todo}: {todo: Todo}) => {
  return (
    <div>{todo.title} </div>
  )
}

export default Todo


//{todo,}:{todo: Todo,}