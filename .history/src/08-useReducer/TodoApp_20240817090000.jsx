import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';
import { useTodo } from './useTodo';

export const TodoApp = () => {
  
    const { state, handleDeleteTodo, haldleToggleTodo, handleNewTodo } = useTodo ();

    return (
    <>
    <h1>TodoApp: {state.length}, <small>pendientes: {state.filter( todo => !todo.done)}</small></h1>
    <hr/>

        <div className="row">
            <div className="col-7">
                <TodoList 
                    state={state}
                    onDeleteTodo = { handleDeleteTodo }
                    onToggleTodo = { haldleToggleTodo }
                />
            </div>
            <div className="col-5">
                <h4>Agregar TODO</h4>
                <hr/>
                <TodoAdd
                    onNewTodo = {handleNewTodo}
                />
            </div>
        </div>
    
    </>
  )
}
