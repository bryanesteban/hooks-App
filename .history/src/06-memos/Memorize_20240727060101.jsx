
export const Memorize = () => {
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