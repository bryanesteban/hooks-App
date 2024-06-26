

import React, { useState } from 'react'

export const SimpleForm = () => {
  
    const [formState, setFormState] = useState({
        username:'Evalion',
        email: 'bryanesteban_123@hotmail.com',
    });
  
    const { username, email } = formState;
  
    const onInputChange = () => {

    }
  
return (
    
    <>
        <h1>Formulario Simple</h1>
        <hr/>

        <input
            type="text"
            className="form-control"
            placeholder="Username"
            name="username"
            value={ username }
            onChange={ onInputChange }
        />

        <input
            type="email"
            className="form-control mt-2"
            placeholder="bryan@correo.com"
            name="email"
            value={ email }
        />

    
    
    </>
  )
}
