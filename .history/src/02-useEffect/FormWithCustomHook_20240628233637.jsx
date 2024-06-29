

import React, { useEffect, useState } from 'react'
import { Message } from './Message';
import { useForm } from '../hooks/useForm';

export const FormWithCustomHook = () => {
  
    

    const { formState, onInputChange } = useForm({
        username:'',
        email: '',
        password: '',
    })
    useEffect(() => {
        // console.log('useEffect called!');
    },[]);

    useEffect(() => {
        // console.log('useEffect called!');
    },[email]);

 
    
  
return (
    
    <>
        <h1>Formulario con Custom Hook</h1>
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
            onChange={ onInputChange }
        />

        <input
            type="password"
            className="form-control mt-2"
            placeholder="Contraseña"
            name="password"
            value={ password }
            onChange={ onInputChange }
        />

        {
            (username === 'Evalion2') && <Message></Message>
        }
        
    
    </>
  )
}
