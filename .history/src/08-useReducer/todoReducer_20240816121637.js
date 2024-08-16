

export const todoReducer = (initialState, action) => {

    switch(action.type){
      case 'ABC':
        // return initialState; 
        throw new Error( `${action.type}  ABC no esta implementada`);
        
        default:
            break;
    }
}