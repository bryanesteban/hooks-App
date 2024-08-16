

const initialState = [{
    id:1,
    todo: 'Recolecar la piedra del Alma',
    done: false,
}];

const todoReducer = (state = initialState, action) =>{


    return state;
}


let todos = todoReducer();

const newTodo = {
    id:2,
    todo: 'Recolectar la priedra del poder',
    done: false
}

const addTodoAction = {
    type:'[TODO] add todo',
    payload: newTodo,
}

todos = todoReducer(todos, addTodoAction);

console.log(todos);