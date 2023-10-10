import React from 'react'

const AddTodo = ({ handleSubmit, newTodo, setNewTodo }: { newTodo: string, setNewTodo: React.Dispatch<React.SetStateAction<string>>, handleSubmit: (e: any) => void}) => {
  return (
    <form onSubmit={handleSubmit}>
        <input 
            type='text' 
            placeholder='Add Todo' 
            value={newTodo} 
            onChange={(e) => setNewTodo(e.target.value)}
            />
            <button 
                type='submit'  
                >Add</button>
    </form>
  )
}

export default AddTodo