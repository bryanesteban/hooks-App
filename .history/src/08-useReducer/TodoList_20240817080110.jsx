
import { TodoItem } from './TodoItem'

export const TodoList = ({state = [], onDeleteTodo}) => {

  return (
        <ul className="list-group">
            {
                state.map(todo => (
                    <TodoItem
                        key={ todo.id }
                        todo={todo} 
                        onDeleteTodo = { onDeleteTodo }
                        onToggleTodo = { onToggleTodo }
                    />    
                ))
            }

        </ul>
  )
}
