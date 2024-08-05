import React, { createContext, useState } from 'react'
export const themeContext = createContext()
export function Theme({ children }) {
    const [theme, setTheme] = useState("black");
    const handleOnChangeColor = () => {
        setTheme(theme === "black" ? "white" : "black");
    };
    return (
        <themeContext.Provider value={{ handleOnChangeColor, theme }}>
            {children}
        </themeContext.Provider>
    );
}