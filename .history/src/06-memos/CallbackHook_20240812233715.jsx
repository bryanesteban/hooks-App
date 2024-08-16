
import React, { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    const [counter, setCounter] = useState( 10 );

    const incrementFather = useCallback(
        (value) => {
            // console.log('setCounter( counter +1 );');
            // setCounter( counter + 1 );
            setCounter( (c) => c + value );
        },
        [],
    )

    // const incrementFather = () =>{
    //     setCounter(counter + 1);
    // }


  return (
    <>
    <div>use Callback Hook: {counter}</div>
    <hr/>
    <ShowIncrement increment={incrementFather}></ShowIncrement>
    </>

  )
}
