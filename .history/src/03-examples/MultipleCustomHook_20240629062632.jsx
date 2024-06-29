
import React from 'react'
import { useFetch } from '../hooks/useFetch'
import { useCounter } from '../hooks/useCounter';

export const MultipleCustomHook = () => {

    const { counter, decrement, increment } = useCounter(1); 
    const { data, hasError, isLoading} = useFetch(`https://pokeapi.co/api/v2/pokemon/${ counter }`);



  
    return (
    <>
    <h1>Informacion de Pokemon</h1>
    <hr></hr>
        { isLoading && <p>Cargando...</p>}
        {/* <pre> {JSON.stringify(data, null, 2 )} </pre> */}
        <h2>{ data?.name }</h2>


        <button
            className="btn btn-primary mt-2"
            onClick={decrement}
        >
            Anteriores
        </button>
        <button
            className="btn btn-primary  mt-2"  
            onClick={increment}  
        >
            Siguiente
        </button>

    </>
    
  )
}
