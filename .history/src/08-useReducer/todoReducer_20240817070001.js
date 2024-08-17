

export const todoReducer = (initialState = [], action) => {

    switch(action.type){
      case '[TODO] Add Todo':
        return [...initialState, action.payload ];
        // return initialState; 
        // throw new Error( `${action.type} no esta implementada`);
      case '[TODO] Remove todo':
        return [initialState.filter(todo => todo.id !== action.payload)];

      default:
            return initialState;
    }
}