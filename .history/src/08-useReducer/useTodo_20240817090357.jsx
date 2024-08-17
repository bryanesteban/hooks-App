import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";


export const useTodo = () => {

    const initialState = [];
    
    const init = () => {
        return JSON.parse(localStorage.getItem('state')) || [];
    }

    const [state, dispatch] = useReducer(todoReducer, initialState,init );

    const handleNewTodo = (todo) => {
        const action = {
            type:'[TODO] Add Todo',
            payload: todo,
        }

        dispatch(action);
    }

    const handleDeleteTodo = (id) => {
        dispatch({
            type:'[TODO] Remove todo',
            payload: id,
        });
    }

    const haldleToggleTodo = (id) => {
        dispatch({
            type:'[TODO] Toggle todo',
            payload: id,
        });
    }


    const todosCount = () => {
        return state.length;
    }

    const pendingTodosCount = () => {
        return state.filter( todo => !todo.done).length;
    }

    useEffect(() => {
        localStorage.setItem('state', JSON.stringify( state ));
    },[state])

    return ({
        state,
        todosCount,
        pendingTodosCount,
        handleNewTodo,
        handleDeleteTodo,
        haldleToggleTodo,
    })
}