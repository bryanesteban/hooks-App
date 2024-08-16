

export const TodoItem = ({todo, id}) => {

  return (
    <li key ={ id } className="list-group-item d-flex justify-content-between">
                <span className="align-self-center">{todo.description}</span>
                <button className="btn btn-danger ">Borrar</button>  
    </li>
  )
}
