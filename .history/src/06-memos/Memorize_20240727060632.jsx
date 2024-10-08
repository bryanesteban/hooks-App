import { useCounter } from "../hooks/useCounter"

export const Memorize = () => {
    
    const { counter, increment} = useCounter( 10 );

    return(
        <>
            <h1> Counter:  <Small counter={counter}/></h1>
            <hr/>
        

        <button
            className="btn btn-primary"
            onClick={ () => increment() }
        
        >
            +1
        </button>
        </>
    )
}