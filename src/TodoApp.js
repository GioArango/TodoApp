import React, { useEffect, useState } from 'react';
import { SearchTodo } from './components/SearchTodo/SearchTodo';
import { TodoAdd } from './components/TodoAdd/TodoAdd';
import { TodoList } from './components/TodoList/TodoList';

const initialTodos = JSON.parse(localStorage.getItem('TodoApp')) || [];

export const TodoApp = () => {

  const [todos, setTodos] = useState(initialTodos);
  const [todoEdit, setTodoEdit] = useState(null);
  const [todoSearch, setTodoSearch] = useState(false);
  
  const handleDone = (todoId) => {

    const doneTodos = todos.map(todo => (
      todo.id === todoId
        ? { ...todo, done: !todo.done }
        : todo
    ));

    setTodos(doneTodos);
    
  }

  const handleDelete = (todoId) => {
    if(todoEdit && todoId === todoEdit.id) {
      setTodoEdit(null);
    } 
    const deleteTodos = todos.filter(td => td.id !== todoId); 
    setTodos(deleteTodos);
    localStorage.setItem('TodoAppDelete', JSON.stringify(todos)); 
  }

  const handleAdd = (todo) => {

    const newTodo = {
      id: Date.now(),
      ...todo,
      done: false
    }

    const changedTodos = [
      newTodo,
      ...todos
    ]

    setTodos(changedTodos);
       
  }

  const handleEdit = (todoEdit) => {

    const changeTodo = todos.map(todo => (
      todo.id === todoEdit.id
        ? todoEdit
        : todo
    ));

    setTodos(changeTodo);
    
  }

  const handleSearch = ( todo ) => {
    const normalizeTodo = todo.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    const filteredTodo = todos.filter( td => td.title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(normalizeTodo));
    setTodos(filteredTodo);    
  }
  
  if(!todoSearch){
    localStorage.setItem('TodoApp', JSON.stringify(todos));    
  } 

  useEffect(() => {
    console.log('searchTodo', todoSearch);
  }, [todoSearch])
  
  

  return (
    <div className='m-5'>
      <h1 className='text-4xl font-bold text-center text-green-500 mb-3'>TODO APP</h1>
      <hr />
      <SearchTodo 
         handleSearch={handleSearch}
         setTodos={setTodos}
         initialTodos={initialTodos}
         setTodoSearch={setTodoSearch}
      />
      <div className='grid grid-cols-2 gap-5'>
        <TodoList
          todos={todos}
          handleDelete={handleDelete}
          handleDone={handleDone}
          setTodoEdit={setTodoEdit}
        />
        <TodoAdd
          handleAdd={handleAdd}
          todoEdit={todoEdit}          
          handleEdit={handleEdit}
          setTodoEdit={setTodoEdit}
        />
      </div>
    </div>
  )
}
