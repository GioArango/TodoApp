import React from 'react'
import { TodoItem } from '../TodoItem/TodoItem'

export const TodoList = ( {todos, handleDelete, handleDone} ) => {

  return (
    <div>
      <h1>Total Todos: {todos.length} ~ Completed Todos: {todos.filter( todo => todo.done).length}</h1>
      <hr />
      {
        todos.map( todo => (
            <TodoItem 
              key={todo.id} 
              todo={todo}
              handleDelete={handleDelete}
              handleDone={handleDone}
            />
        ))
      }
      
    </div>
  )
}
