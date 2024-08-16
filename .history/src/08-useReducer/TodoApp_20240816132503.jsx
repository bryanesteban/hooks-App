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
                <ul className="list-group">
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ul>
            </div>
            <div className="col-5">
                <h4>Agregar TODO</h4>
                <hr/>
                <form>
                    <input
                        type="text"
                        placeholder="¿Que hay que hacer?"
                        className="form-control"
                    />
                    <button 
                        type="submit"
                        className="btn btn-outline-primary mt-1">
                        Agregar
                    </button>
                </form>
            </div>
        </div>
    
    </>
  )
}
