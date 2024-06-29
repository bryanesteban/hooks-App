
import React from 'react'
import { useFetch } from '../hooks/useFetch'

export const MultipleCustomHook = () => {
  
    useFetch();



  
    return (
    <>
    <h1>Informacion de Pokemon</h1>
    <hr></hr>
        <pre> Pokemon Info </pre>
    </>
    
  )
}
