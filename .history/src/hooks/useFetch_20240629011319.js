

import React, { useEffect, useState } from 'react'

export const useFetch = () => {
  
    

    const [state, setstate] = useState({
        date:null,
        isLoading: true,
        hasError: false,
        error: null,
    });

    useEffect(() => {
        getFetch();
    

    }, [])
    
  
    const getFetch= async(url) => {

       const resp = await fetch('https://pokeapi.co/api/v2/pokemon/1');
       const data = await resp.json();

       console.log({data});
    }
  
    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
  }
}
