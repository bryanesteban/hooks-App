import React, { useState } from 'react'

export const CounterApp = () => {
  
  const [counter, setcounter] = useState({
    Counter1: 10,
    Counter2: 20,
    Counter3: 30,
  })
    return (
    <>
    <h1>Counter: { counter.Counter1 }</h1>    
    <hr/>

    <button className='btn' onClick={ () => setcounter( counter + 1 )}>+1</button>
    <button onClick={ () => setcounter( counter - 1 )}>-1</button>

    </>
  )
}
