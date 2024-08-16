import React, { useReducer } from 'react'
import { todoReducer } from './todoReducer';

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
  
    return (
    <>
    <h1>TodoApp</h1>
    <hr/>

        <div className="row">
            <div className="col-7">
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ul>
            </div>
            <div className="col-5">

            </div>
        </div>
    
    </>
  )
}
