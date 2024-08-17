

export const todoReducer = (initialState, action) => {

    switch(action.type){
      case '[TODO] Add Todo':
        return [...initialState, action.dispatch ]
        // return initialState; 
        // throw new Error( `${action.type} no esta implementada`);
        
        default:
            return initialState;
    }
}