import React, { useState } from 'react'

export const CounterApp = () => {


    const [{Counter1, Counter2, Counter3}, setCounter] = useState({
        Counter1: 10,
        Counter2: 20,
        Counter3: 30,
      });



  
    return (
    <>
    <h1>Counter1: { Counter1 }</h1>    
    <h1>Counter2: { Counter2 }</h1>    
    <h1>Counter3: { Counter3 }</h1>    
    <hr/>

    <button onClick={ setCounter({ Counter1: Counter1 + 1 , Counter2, Counter1}) }> +1</button>

    </>
  )
}
