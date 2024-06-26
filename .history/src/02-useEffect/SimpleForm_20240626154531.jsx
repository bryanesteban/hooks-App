

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

        <input
            type="email"
            className="form-control mt-2"
            placeholder="bryan@correo.com"
            name="email"
        
        />

    
    
    </>
  )
}
