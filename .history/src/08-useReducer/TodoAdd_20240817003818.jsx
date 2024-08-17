import { useState } from "react";
import { useForm } from "../hooks/useForm";



export const TodoAdd = ({handleNewTodo}) => {
    
    
    const { description, onInputChange, onResetForm} = useForm({
        description:''
    });

    
    
    const onFormSubmit = ( event ) => {
        event.preventDefaul();
        if(description.lenght <= 1) return ;

        const newTodo = {
            id: new Date().getTime(),
            done: false,
            description: description,
        }
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
                    onChange={onInputChange}
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