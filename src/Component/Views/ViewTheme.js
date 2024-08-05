
import React, { useContext } from 'react'
import "./ViewTheme.css"
import { themeContext } from '../Contents/Begin/Theme';

export default function ViewTheme() {
    const { handleOnChangeColor, theme } = useContext(themeContext);
    return (
        <div className={theme}>
            <p>tuandeptrai</p>
            {theme === 'black' ? (
                <button onClick={() => handleOnChangeColor()}>white</button>
            ) : (
                <button onClick={() => handleOnChangeColor()}>blue</button>
            )}
        </div>
    )
}