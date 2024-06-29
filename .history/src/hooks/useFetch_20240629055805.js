

import React, { useEffect, useState } from 'react'

export const useFetch = ( url ) => {
  
    

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

       const resp = await fetch();
       
       //sleep
       await new Promise( resolve => setTimeout(resolve, 2000));

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
       setstate({
        data:data,
        isLoading: false,
        hasError: false,
        error: null
       })

       console.log({data});
    }
  
    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
  }
}
