import { useEffect } from "react";

export const Message = () => {
    
    useEffect(() => {
      
        window.addEventListener( 'mousemove', onMouseMove);

        const onMouseMove = ( { x , y }) => {
            const coords = { x , y}
            console.log(coords);

        }
    
      return () => {
        
      }
    }, []);
    
   
    return (
    <>
        <h3> Usuario ya existe</h3>
    
    </>
  )
}
