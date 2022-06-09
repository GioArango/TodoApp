import React from 'react'

export const TodoItem = ({ todo, handleDelete, handleDone }) => {

  const { id, title, desc, done } = todo;

  return (
    <>
      <div className='border-2 border-red-700 rounded p-3 mt-3'>
        <div className='md:flex justify-end space-x-1.5 mb-3'>
          <h2 className={`md:text-4xl text-stone-400 ${done && 'line-through'}`}>
            {title}
          </h2>
          <button
            className={`bg-${done ? 'yellow' : 'green'}-500 hover:bg-${done ? 'yellow' : 'green'}-300 text-white font-bold py-2 px-4 rounded md:w-2/12`}
            onClick={() => handleDone(id)}
          >
            { done ? 'Todo' : 'Done' }
          </button>
        </div>

        <p className='text-lg text-right text-stone-500'>{desc}</p>
        <hr />
        <div className='flex justify-end space-x-1.5 mt-2'>
          <button
            className='bg-blue-500 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded md:w-2/12'
            onClick={handleDone}
          >
            Edit
          </button>
          <button
            className='bg-red-500 hover:bg-red-300 text-white font-bold py-2 px-4 rounded md:w-2/12'
            onClick={() => handleDelete(id)}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  )
}
