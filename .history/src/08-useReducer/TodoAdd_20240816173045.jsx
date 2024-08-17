import { useState } from "react";



export const TodoAdd = ({handleNewTodo}) => {
    
    const [Todo, setTodo] =useState({ id: new Date().getTime(),
                                      description: '',
                                      done: false});

    const onInputChange = ({target}) => {

        const {name, value} =target;
        setTodo({
            ...Todo,
            [name]:value,
        });

    }
    
    
    return (
    <>
        <h4>Agregar TODO</h4>
            <hr/>
            <form>
                <input
                     type="text"
                    placeholder="¿Que hay que hacer?"
                    className="form-control"
                    name="description"
                    value={description}
                />
                <button 
                    type="submit"
                    className="btn btn-outline-primary mt-1"
                    onClick={onInputChange}>
                    Agregar
                </button>
            </form>
    </>
    )
}