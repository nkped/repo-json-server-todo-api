'use client'
import React from 'react'
import Content from './components/Content'
import AddTodo from './components/AddTodo'
import apiRequests from '@/lib/apiRequests'

//Find prod url when deploying
const API_URL = 'api/todos'

import { useState, useEffect } from 'react'

const Homepage = () => {

  const [ fetchError, setFetchError ] = useState(null)

  const [ newTodo, setNewTodo ] = useState('')

  const [ todos, setTodos ] = useState<Todo[]>([])

  
  useEffect(() => {
    const getTodos = async () => {
      const res = await fetch(API_URL)
      const result = await res.json()
      console.log('result from page: ', result)
      setTodos(result)
    }
    getTodos()
  }, [])




  const handleCheck = async (id: number): Promise<void> => {
    const listItems: Todo[] = todos.map((todo: Todo) => id === todo.id ? { ...todo, completed: !todo.completed} : todo )
    setTodos(listItems)

    console.log(listItems)
    const updatedTodo = listItems.filter((todo) => id === todo.id )
    console.log(updatedTodo)

    const { userId, title, completed } = updatedTodo[0]

    const updateOptions = { method: 'PUT', headers: { 'Content-Type': 'application/json'}, body: JSON.stringify({ userId, id, title, completed })}

    const reqUrl = `${API_URL}/${id}`
    console.log(reqUrl)

    const result = await apiRequests(reqUrl, updateOptions)
    //console.log(result)
    
    //if (result) setFetchError(result)
  } 

  //completed: updatedTodo[0].completed




  const addTodo = async (title: string) => {
    const id = todos[todos.length - 1].id + 1
    const myNewTodo = { userId: 3, id, title, completed: false }
    const listItems = [ ...todos, myNewTodo]
    setTodos(listItems)

    const postOptions = { method: 'POST', header: { 'Content-Type': 'application/json'}, body: JSON.stringify(myNewTodo)}

    const reqUrl = API_URL

    const result = await apiRequests(reqUrl, postOptions)
    //if (result) setFetchError(result)
    console.log('result from page: ', result)
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



/* [
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
  ] */