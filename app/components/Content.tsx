import React from 'react'
import AddTodo from './AddTodo'




const Content = ({ todos, handleCheck }: { todos: Todo[], handleCheck: (id: number) => void }) => {
  return (
        <ul>
            {todos.map((todo) => (
            <li key={todo.id}>
                <input 
                    type='checkbox' 
                    checked={todo.completed} 
                    onChange={() => handleCheck(todo.id)}
                    />
                {todo.title}
            </li>))}
        </ul>
  )
}

export default Content