import React, { useState } from 'react'

export const CounterApp = () => {
  
  const [counter, setcounter] = useState(10)
    return (
    <>
    <h1>Counter: { counter }</h1>    
    <hr/>

    <button onClick={ () => setcounter( counter + 1 )}>+1</button>
    <button onClick={ () => setcounter( counter - 1 )}>-1</button>

    </>
  )
}
