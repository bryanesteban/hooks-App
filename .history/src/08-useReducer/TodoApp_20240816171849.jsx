import React, { useReducer } from 'react'
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

export const TodoApp = () => {
  
    const initialState = [
    {
        id: new Date().getTime(),
        description: 'Recolecar la piedra del Alma',
        done: false,
    },
    {
        id: new Date().getTime()*3,
        description: 'Recolecar la piedra del poder',
        done: false,
    }

    ];

    const [state, dispatch] = useReducer(todoReducer, initialState);
  

    const handleNewTodo = (todo) => {
        console.log({todo});
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
                <TodoAdd/>
            </div>
        </div>
    
    </>
  )
}
