
import React from 'react'

export const useForm = ( initialForm = {}) => {
  
    const [formState, setFormState] = useState();
  
    const { username, email, password } = formState;
  
    const onInputChange = ({target}) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]:value
        });
    }
    
    return {
        formState,
        onInputChange,
    }
}
