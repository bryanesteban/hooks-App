import React from 'react'
import { UserContext } from './UserContext'

export const UserProvider = ({ children }) => {
  return (
    <UserContext>
        { children }
    </UserContext>
  )
}
