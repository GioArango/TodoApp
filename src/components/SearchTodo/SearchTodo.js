import React, { useState } from 'react';

export const SearchTodo = ({ handleSearch, setTodos, setTodoSearch }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);

        if (e.target.value.trim() === '') {

            const todosStorage = JSON.parse(localStorage.getItem('TodoApp'));
            const todosDeleteStorage = JSON.parse(localStorage.getItem('TodoAppDelete')); //TODO nombre vble
            const todosEditStorage = JSON.parse(localStorage.getItem('TodoAppEdit'));

            if (todosEditStorage) {
                const {id} = todosEditStorage;
                const changeTodo = todosStorage.map(todo => (
                    todo.id === id
                        ? todosEditStorage
                        : todo
                ));

                localStorage.setItem('TodoApp', JSON.stringify(changeTodo));
                localStorage.removeItem('TodoAppEdit');
            } else {
                setTodos(todosStorage);
            }

            if (todosDeleteStorage) {
                const [{ id }] = todosDeleteStorage;
                const deleteTodo = todosStorage.filter(todo => todo.id !== id);
                
                localStorage.setItem('TodoApp', JSON.stringify(deleteTodo));
                localStorage.removeItem('TodoAppDelete');
            }

            setTodoSearch(false);
            setTodos(JSON.parse(localStorage.getItem('TodoApp')));
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 0) {
            setTodoSearch(true);
            handleSearch(inputValue);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit} className='my-3'>
            <input
                type='text'
                name='title'
                autoComplete='off'
                placeholder='Search a task...'
                className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1'
                onChange={handleInputChange}
            />
        </form>
    )
}
