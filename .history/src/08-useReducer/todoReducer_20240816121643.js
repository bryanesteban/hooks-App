

export const todoReducer = (initialState, action) => {

    switch(action.type){
      case 'ABC':
        // return initialState; 
        throw new Error( `${action.type} no esta implementada`);
        
        default:
            break;
    }
}