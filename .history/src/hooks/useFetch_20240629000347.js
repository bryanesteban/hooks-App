

import React from 'react'

export const useFetch = () => {
  
    const [state, setstate] = useState({
        date:null,
        isLoading: true,
        hasError: false,
        error: null,
    });
  
  
    return {
        data: state.data
  }
}
