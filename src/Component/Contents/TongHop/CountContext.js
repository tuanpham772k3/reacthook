import React, { createContext, useReducer } from 'react'
import { reducer } from './CountReducer';

export const countContext = createContext();

export function CountContext({ children }) {
    const [count, dispatch] = useReducer(reducer, 0);


    return (
        <countContext.Provider value={{ count, dispatch }}>
            {children}
        </countContext.Provider>
    )
}
