

export const  useTodo = () => {

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
}