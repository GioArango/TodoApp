import React, { useState } from 'react';
import { TodoAdd } from './components/TodoAdd/TodoAdd';
import { TodoList } from './components/TodoList/TodoList';

const initialTodos = [
  {
    id: 1,
    title: 'Tarea 1',
    desc: 'Aprender React',
    done: false
  },
  {
    id: 2,
    title: 'Tarea 2',
    desc: 'Aprender Node',
    done: false
  },
  {
    id: 3,
    title: 'Tarea 3',
    desc: 'Aprender Tailwind',
    done: false
  }
]

export const TodoApp = () => {

  const [todos, setTodos] = useState(initialTodos);

  const handleDone = (todoId) => {

    const doneTodos = todos.map(todo => (
      todo.id === todoId
      ? {...todo, done: !todo.done }
      : todo
    ));

    setTodos(doneTodos);
  }

  const handleDelete = (todoId) => {
    const deleteTodos = todos.filter(td => td.id !== todoId);

    setTodos(deleteTodos);
  }

  const handleAdd = (todo) => {
    console.log(todo);
    
    const newTodo = {
      id: Date.now(),
      ...todo,
      done: false
    }

    const changedTodos = [
      newTodo,
      ...todos
    ]

    setTodos(changedTodos)
  }

  return (
    <div className='m-5'>
      <h1 className='text-4xl font-bold text-center text-green-500 mb-3'>TODO APP</h1>
      <hr />
      <div className='grid grid-cols-2 gap-5'>
        <TodoList
          todos={todos}
          handleDelete={handleDelete}
          handleDone={handleDone}
        />
        <TodoAdd handleAdd={handleAdd}/>
      </div>
    </div>
  )
}
