import { useCounter } from "../hooks/useCounter"

export const Memorize = () => {
    
    const { conter, incremet} = useCounter( 10 );

    return(
        <>
            <h1> Counter:  <small>{ counter }</small></h1>
            <hr/>
        

        <button
            className="btn btn-primary"
            onClick={ () => incremet() }
        
        >
            +1

        </button>
        </>
    )
}