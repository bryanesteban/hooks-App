

const initialState = [{
    id:1,
    todo: 'Recolecar la piedra del Alma',
    done: false,
}];

const todoReducer = (state = initialState, action) =>{


    return state;
}


let todos = todoReducer();

console.log(todos);