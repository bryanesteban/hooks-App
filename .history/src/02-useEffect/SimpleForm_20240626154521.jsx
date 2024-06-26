

import React from 'react'

export const SimpleForm = () => {
  return (
    
    <>
        <h1>Formulario Simple</h1>
        <hr/>

        <input
            type="text"
            className="form-control"
            placeholder="Username"
            name="username"
        
        />
            <b></b>
        <input
            type="email"
            className="form-control"
            placeholder="bryan@correo.com"
            name="email"
        
        />

    
    
    </>
  )
}
