
import React, { useState } from 'react'

export const CallbackHook = () => {

    const [counter, useCounter] = useState(10);


  return (
    <div>use Callback Hook: {counter}</div>
  )
}
