
import React, { useState } from 'react'
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    const increment = () =>{
        setCounter(conter + 1);
    }


  return (
    <>
    <div>use Callback Hook: {counter}</div>
    <hr/>
    <ShowIncrement increment={increment}></ShowIncrement>
    </>

  )
}
