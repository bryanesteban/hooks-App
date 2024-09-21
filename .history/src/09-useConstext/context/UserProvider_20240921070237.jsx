import React, { useState } from 'react'
import { UserContext } from './UserContext'

// const user = {
//   id:123,
//   name: 'Bryan Vasquez',
//   email: 'bryanesteban@google.com'
// }



export const UserProvider = ({ children }) => {

  const [user, setUser] = useState( user = {
    id:123,
    name: 'Bryan Vasquez',
    email: 'bryanesteban@google.com'
  });


  return (
    // <UserContext.Provider value={{ hola: 'Mundo', user: user }}>
    <UserContext.Provider value={{ user }}>
    { children }
    </UserContext.Provider>
  )
}
