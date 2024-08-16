


export const TodoAdd = () => {
    return (
    <>
        <h4>Agregar TODO</h4>
            <hr/>
            <form>
                <input
                     type="text"
                    placeholder="¿Que hay que hacer?"
                    className="form-control"
                />
                <button 
                    type="submit"
                    className="btn btn-outline-primary mt-1">
                    Agregar
                </button>
            </form>
    </>
    )
}