import React, { useState } from 'react'

export const CounterApp = () => {


    const [{Counter1, Counter2, Counter3}, setcounter] = useState({
        Counter1: 10,
        Counter2: 20,
        Counter3: 30,
      });
      
    const contador = () => {
        const sum = Counter1 + 1;
        return setcounter({sum , Counter2, Counter3}) ;
    }

  
    return (
    <>
    <h1>Counter1: { Counter1 }</h1>    
    <h1>Counter2: { Counter2 }</h1>    
    <h1>Counter3: { Counter3 }</h1>    
    <hr/>

    <button onClick={ contador() }> +1</button>

    </>
  )
}
