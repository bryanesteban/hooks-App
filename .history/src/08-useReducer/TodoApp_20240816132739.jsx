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
                    <li className="list-group-item d-flex justify-content-between">
                       <span className="align-self-center">Item 1</span>
                        <button className="btn btn-danger ">Borrar</button>  
                    </li>

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
