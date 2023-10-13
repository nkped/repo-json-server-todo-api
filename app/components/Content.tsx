import React from 'react'
import AddTodo from './AddTodo'




const Content = ({ todos, handleCheck, handleDelete }: { todos: Todo[], handleCheck: (id: number) => void, handleDelete: (id: number) => void }) => {
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
                <button 
                onClick={() => handleDelete(todo.id) }
                >DEL</button>
            </li>))}
        </ul>
  )
}

export default Content