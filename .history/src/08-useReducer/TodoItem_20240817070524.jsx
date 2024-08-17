

export const TodoItem = ({todo},{handleDeleteTodo}) => {

  return (
    <li  className="list-group-item d-flex justify-content-between">
                <span className="align-self-center">{todo.description}</span>
                <button 
                  className="btn btn-danger "
                  onClick={handleDeleteTodo}>Borrar</button>  
    </li>
  )
}