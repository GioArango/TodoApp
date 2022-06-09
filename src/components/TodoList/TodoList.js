import React from 'react'
import { TodoItem } from '../TodoItem/TodoItem'

export const TodoList = ({ todos, handleDelete, handleDone, setTodoEdit }) => {

  return (
    <div>
      <h1 className='text-xl text-stone-600'>Total Todos: <span className='text-red-700'>{todos.length}</span> ~ Completed Todos: <span className='text-green-400'>{todos.filter(todo => todo.done).length}</span></h1>
      <hr />
      {
        todos.length === 0
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
          />
        ))
      }

    </div>
  )
}
