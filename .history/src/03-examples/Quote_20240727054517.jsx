

import React, { useLayoutEffect, useRef } from 'react';

export const Quote = ({ author, quote }) => {

  const pRef = useRef();

  useLayoutEffect(() => {
    

    return ( ) => {

    };
  },[quote])

  return (
    <blockquote
        className="blockquote text-end"
        style={{ display: 'flex' }}
    
    >
        <p ref={ pRef} className='mb-1'>{ quote }</p>
        <footer className="blockquote-footer">{ author }</footer>
    </blockquote>
    


  )
}
