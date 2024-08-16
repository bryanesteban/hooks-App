

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

todos = todoReducer(todos, newTodo);

console.log(todos);