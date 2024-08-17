import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

export const TodoApp = () => {
  
    const initialState = [
    // {
    //     id: new Date().getTime(),
    //     description: 'Recolecar la piedra del Alma',
    //     done: false,
    // },
    // {
    //     id: new Date().getTime()*3,
    //     description: 'Recolecar la piedra del poder',
    //     done: false,
    // }

    ];

    const init = () => {
        return JSON.parse(localStorage.getItem('state')) || [];
    }

    const [state, dispatch] = useReducer(todoReducer, initialState,init );
    
    useEffect(() => {
        localStorage.setItem('state', JSON.stringify( state ));
    },[state])

    const handleNewTodo = (todo) => {
        const action = {
            type:'[TODO] Add Todo',
            payload: todo,
        }

        dispatch(action);
    }

    const handleDeleteTodo = (id) => {
        dispatch({
            type:'[TODO] Remove Todo',
            payload: id,
        });
    }


    return (
    <>
    <h1>TodoApp: 10, <small>pendientes: 2</small></h1>
    <hr/>

        <div className="row">
            <div className="col-7">
                <TodoList state={state}/>
            </div>
            <div className="col-5">
                <h4>Agregar TODO</h4>
                <hr/>
                <TodoAdd
                    onNewTodo = {handleNewTodo}
                    handleDeleteTodo = {handleDeleteTodo}/>
            </div>
        </div>
    
    </>
  )
}
