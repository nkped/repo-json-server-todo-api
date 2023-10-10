'use client'
import React from 'react'
import Content from './components/Content'
import AddTodo from './components/AddTodo'

import { useState } from 'react'

const Homepage = () => {

  const [ newTodo, setNewTodo ] = useState('')

  const [ todos, setTodos ] = useState([
    {
      "userId": 1,
      "id": 1,
      "title": "walk",
      "completed": false
    },
    {
      "userId": 1,
      "id": 2,
      "title": "run",
      "completed": true
    }
  ])

  const handleCheck = (id: number): void => {
    const listItems: Todo[] = todos.map((todo) => id === todo.id ? { ...todo, completed: !todo.completed} : todo )
    setTodos(listItems)
  } 

  const addTodo = (title: string): void => {
    const id = todos[todos.length - 1].id + 1
    const myNewTodo = { userId: 3, id, title, completed: false }
    const listItems = [ ...todos, myNewTodo]
    setTodos(listItems)
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    addTodo(newTodo)
    setNewTodo('')
  }


    return (
    <div>
      <h1>Hello</h1>      
      <main>
        <AddTodo 
          handleSubmit={handleSubmit} 
          newTodo={newTodo} 
          setNewTodo={setNewTodo}
          />
        <Content 
          todos={todos}
          handleCheck={handleCheck} 
          />
      </main>
    </div>
  )
}

export default Homepage