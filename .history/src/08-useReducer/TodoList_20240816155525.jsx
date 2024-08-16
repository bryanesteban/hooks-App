
import { TodoItem } from './TodoItem'

export const TodoList = ({state}) => {

  return (
        <ul className="list-group">
            {
                state.map(todo => (
                    <TodoItem todo={todo} />    
                ))
            }

        </ul>
  )
}
