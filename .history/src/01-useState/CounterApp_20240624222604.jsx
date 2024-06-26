import React, { useState } from 'react'

export const CounterApp = () => {
  
  const [{Counter1, Counter2, Counter3}, setcounter] = useState({
    Counter1: 10,
    Counter2: 20,
    Counter3: 30,
  });
    return (
    <>
    <h1>Counter1: { counter.Counter1 }</h1>    
    <h1>Counter2: { counter.Counter2 }</h1>    
    <h1>Counter3: { counter.Counter3 }</h1>    
    <hr/>

    <button className='btn' onClick={ () => setcounter( counter + 1 )}>+1</button>
    <button onClick={ () => setcounter( counter - 1 )}>-1</button>

    </>
  )
}
