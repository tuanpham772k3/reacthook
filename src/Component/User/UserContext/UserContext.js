import React, { createContext, useReducer } from 'react'
import { reducerUser } from './UserReducer'
const USER_DEFAULT = {
    isLoading: true,
    users: [],
    isError: false,
}
export const usersContext = createContext(USER_DEFAULT)

export function UserContext({ children }) {

    const [state, dispatch] = useReducer(reducerUser, USER_DEFAULT)
    return (
        <usersContext.Provider value={{ state, dispatch }}>
            {children}
        </usersContext.Provider>
    )
}
