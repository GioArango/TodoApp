import React, { useState } from 'react';

const newTodo = {
  title: '',
  desc: ''
}

export const TodoAdd = ({ handleAdd }) => {

  const [formValues, setFormValues] = useState(newTodo);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const { title, desc } = formValues;

  const handleInputChange = (e) => {

    const todo = {
      ...formValues,
      [e.target.name]: e.target.value
    }
    setFormValues(todo);

    ( title && setError(null) )
    
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      setError('Please, type a title task');
      return;
    }

    handleAdd(formValues);
    setFormValues(newTodo);
    setSuccess('Task added!');

    setTimeout(() => {
      setSuccess(null);
    }, 2000);

    setError(null);

  }

  return (
    <div>
      <h1 className='text-xl'>Add Todo</h1>
      <hr />

      <form onSubmit={handleSubmit} className='mt-2'>
        <div className='col-span-6 sm:col-span-4 verflow-hidden'>
          <label className='block text-lg text-stone-700'>Task</label>
          <input
            type='text'
            name='title'
            autoComplete='off'
            className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1'
            onChange={handleInputChange}
            value={title}
          />
        </div>
        <div>
          <label className='block text-lg text-stone-700'> Description </label>
          <div className='mt-1'>
            <textarea
              name='desc'
              rows='3'
              className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1'
              placeholder='Type a description'
              onChange={handleInputChange}
              value={desc}
            />
          </div>
        </div>
        <div className='mt-2 flex justify-end'>
          <button
            type='submit'
            className={`bg-green-500 hover:bg-green-300 text-white font-bold py-2 px-4 rounded md:w-3/12`}
          >
            Add Task
          </button>
        </div>
      </form>
      {
        (success)
          && <div className='bg-green-300 text-green-900 text-center text-base mt-3 p-2 rounded'>{success}</div>          
      }

      {
        (error)
          && <div className='bg-red-300 text-red-900 text-center text-base mt-3 p-2 rounded'>{error}</div>
      }

    </div>
  )
}
