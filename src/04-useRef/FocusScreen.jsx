import React, { useRef } from 'react'

export const FocusScreen = () => {
 
    const first = useRef(second);
 
    return (
    <>
        <h1>Focus Screen</h1>
        <hr/>

        <input
            type="text"
            placeholder="Ingrese su nombre"
            className='form-control'
        
        />

        <button className="btn btn-primary mt-2">
            Set focus 
        </button>
    </>
  )
}
