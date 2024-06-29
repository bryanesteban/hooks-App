
import React from 'react'
import { useFetch } from '../hooks/useFetch'

export const MultipleCustomHook = () => {
  
   const { data, hasError, isLoading} = useFetch('https://pokeapi.co/api/v2/pokemon/1');



  
    return (
    <>
    <h1>Informacion de Pokemon</h1>
    <hr></hr>
        { isLoading && <p>Cargando...</p>}
        {/* <pre> {JSON.stringify(data, null, 2 )} </pre> */}
        <h2>{ data?.name }</h2>


        <button
            className="btn btn-primary mt-2"
        >
            Anteriores
        </button>
        <button
            className="btn btn-primary  mt-2"    
        >
            Siguiente
        </button>

    </>
    
  )
}
