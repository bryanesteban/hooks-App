
import React from 'react'
import { useFetch } from '../hooks/useFetch'

export const MultipleCustomHook = () => {
  
   const { data, hasError, isLoading} = useFetch();



  
    return (
    <>
    <h1>Informacion de Pokemon</h1>
    <hr></hr>
        <pre> {data} </pre>
    </>
    
  )
}
