

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
    
  
    const getFetch= async() => {

       const resp = await fetch('https://pokeapi.co/api/v2/pokemon/1');
       
       if( !resp.ok){
        setstate({
            data:null,
            isLoading: false,
            hasError: true,
            error:{
                code: resp.status,
                message: resp.statusText,
            }
        });
        return;
       }
       
       
       const data = await resp.json();

       console.log({data});
    }
  
    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
  }
}
