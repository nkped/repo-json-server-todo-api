'use client'
import React from 'react'

const Checkbox = ({todo,}: {todo: Todo,}) => {

    const handleChange = (e: any) => {
        e.preventDefault()
    }



  return (
    <input 
        type='checkbox' 
        checked={todo.completed}
        onChange={handleChange}
        />
  )
}

export default Checkbox