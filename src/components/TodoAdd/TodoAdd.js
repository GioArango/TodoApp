import React, { useEffect, useState } from 'react';

const newTodo = {
  title: '',
  desc: ''
}

export const TodoAdd = ({ handleAdd, todoEdit, handleEdit, setTodoEdit, todoSearch }) => {

  const [formValues, setFormValues] = useState(newTodo);
  const { title, desc } = formValues;

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    if (todoEdit) {
      setFormValues(todoEdit);
    } else {
      setFormValues(newTodo);
    }
  }, [todoEdit])


  const handleInputChange = (e) => {

    const todo = {
      ...formValues,
      [e.target.name]: e.target.value
    }
    setFormValues(todo);

    (title && setError(null))

  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      setError('Please, type a title task');
      return;
    }

    if (todoEdit) {
      handleEdit(formValues);
      setTodoEdit(null);
    } else {
      handleAdd(formValues);
    }

    setFormValues(newTodo);
    setSuccess(todoEdit ? 'Task edited!' : 'Task added');

    setTimeout(() => {
      setSuccess(null);
    }, 2000);

    setError(null);
  }

  const handleCancel = () => {
    
    const todoCancel = {
      title: todoEdit.title,
      desc: ''
    }
    
    setTodoEdit(null);
    setFormValues(todoCancel);
  }

  return (
    <div>
      <h1 className={
        todoSearch
        ?
        'text-xl text-stone-200'
        :
        'text-xl text-stone-600'
      }>
        {todoEdit ? 'Edit' : 'Add'} Todo
      </h1>
      <hr />

      <form onSubmit={handleSubmit} className='mt-2'>
        <div className='col-span-6 sm:col-span-4 verflow-hidden'>
          <label className={
            todoSearch
            ?
            'block text-lg text-stone-200'
            :
            'block text-lg text-stone-700'
          }>
            Task
          </label>
          <input
            disabled={(todoSearch && !todoEdit) && 'disabled'}
            type='text'
            name='title'
            autoComplete='off'
            className={
              todoSearch
                ?
                'disabled:bg-gray-100 mt-1 px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-noneblock w-full rounded-md sm:text-sm'
                :
                'mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1'
            }
            onChange={handleInputChange}
            value={title}
          />
        </div>
        <div>
          <label className={
            todoSearch
            ?
            'block text-lg text-stone-200'
            :
            'block text-lg text-stone-700'
          }> 
            Description 
          </label>
          <div className='mt-1'>
            <textarea
              disabled={(todoSearch && !todoEdit) && 'disabled'}
              name='desc'
              rows='3'
              className={
                todoSearch
                  ?
                  'disabled:bg-gray-100 mt-1 px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-noneblock w-full rounded-md sm:text-sm'
                  :
                  'mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1'
              }
              placeholder='Type a description'
              onChange={handleInputChange}
              value={desc}
            />
          </div>
        </div>
        <div className='mt-2 flex justify-end space-x-1.5'>

          {
            (todoEdit)
            &&
            <button
              type='button'
              className='bg-orange-500 hover:bg-orange-300 text-white font-bold py-2 px-4 rounded md:w-3/12'
              onClick={handleCancel}
            >
              Cancel
            </button>
          }

          <button
            disabled={(todoSearch && !todoEdit) && 'disabled'}
            type='submit'
            className={
              (todoSearch && !todoEdit)
              ?
              'bg-green-100 text-white font-bold py-2 px-4 rounded md:w-3/12'
              :
              `bg-${(todoEdit ? 'blue' : 'green')}-500 hover:bg-${(todoEdit ? 'blue' : 'green')}-300 text-white font-bold py-2 px-4 rounded md:w-3/12`            
            }
          >
            {todoEdit ? 'Edit' : 'Add'} Task
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
