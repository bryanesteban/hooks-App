import { useState } from "react";
import { useCounter } from "../hooks/useCounter"
import { Small } from "./Small";

const heaveStuff = (iterationNumber = 100) => {
    for(let i = 0; i<iterationNumber; i++)
    {
        console.log('ahi vamos...');
    }

    return `${iterationNumber} iteraciones realizadas`;
}

export const MemoHook = () => {
    
    const { counter, increment} = useCounter( 10 );
    const [show, setShow] = useState(true);
    return(
        <>
            <h1> Counter:  <Small value={counter}/> </h1>
            <hr/>

        <h4>{heaveStuff(50000)}</h4>    
        

        <button
            className="btn btn-primary"
            onClick={ () => increment() }
        
        >
            +1
        </button>
        <button
            className="btn btn-outline-primary"
            onClick= { () => setShow( !show )}
        >
            Show/Hide {JSON.stringify(show)}
            
        </button>
        </>
    )
}