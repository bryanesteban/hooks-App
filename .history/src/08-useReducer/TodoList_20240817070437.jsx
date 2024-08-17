
import { TodoItem } from './TodoItem'

export const TodoList = ({state = []}, {handleDeleteTodo}) => {

  return (
        <ul className="list-group">
            {
                state.map(todo => (
                    <TodoItem
                        key={ todo.id }
                        todo={todo} 
                        handleDeleteTodo = {handleDeleteTodo}
                    />    
                ))
            }

        </ul>
  )
}
