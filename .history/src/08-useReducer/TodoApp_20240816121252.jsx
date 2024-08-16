import React, { useReducer } from 'react'

export const TodoApp = () => {
  
    const initialState = [{
        id: new Date().getTime(),
        description: 'Recolecar la piedra del Alma',
        done: false,
    }];

    const [state, dispatch] = useReducer(reducer, initialState);
  
    return (
    <>
    <h1>TodoApp</h1>
    <hr/>

    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>
    </>
  )
}
