import React from 'react'

export const FocusScreen = () => {
  return (
    <>
        <h1>Focus Screen</h1>
        <hr/>

        <input
            type="text"
            placeholder="Ingrese su nombre"
            className='form-control'
        
        />

        <button className="btn btn-primary">
            Set focus 
        </button>
    </>
  )
}
