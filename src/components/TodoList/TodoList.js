import React from 'react'
import { TodoItem } from '../TodoItem/TodoItem'

export const TodoList = ({ todos, handleDelete, handleDone, setTodoEdit, todoSearch, todoSearchEmpty, setTodoSearch }) => {

  return (
    <div>
      {
        todos.length > 0
        &&
        <>
          <h1 className='text-xl text-stone-600'>Total Todos: <span className='text-red-700'>{todos.length}</span> ~ Completed Todos: <span className='text-green-400'>{todos.filter(todo => todo.done).length}</span></h1>
          <hr />
        </>
      }
      {
        (todos.length === 0 && !todoSearch)
          ?
          (<div className='bg-green-100 text-cyan-900 text-center text-base mt-3 p-2 rounded'>Add your task 😀</div>)
          :

          todos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              handleDelete={handleDelete}
              handleDone={handleDone}
              setTodoEdit={setTodoEdit}
              setTodoSearch={setTodoSearch}
            />
          ))

      }
      {
        (todoSearch && todoSearchEmpty)
        &&
        <div className='bg-red-300 text-red-900 text-center text-base mt-3 p-2 rounded'>Not found ☠️</div>
      }

    </div>
  )
}
