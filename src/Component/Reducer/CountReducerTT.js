import React, { useReducer } from 'react'
const reducer = (state, action) => {
    switch (action) {
        case "ADD":
            return state + 1;
        case "RESET":
            return state = 0;
        default:
            return state;
    }
};
export default function CountReducerTT() {
    const [count, dispatch] = useReducer(reducer, 0);
    return (
        <div>
            <h2>Hien thi so dem: {count}</h2>
            <button onClick={() => { dispatch("ADD") }}>reducer</button>
            <button onClick={() => { dispatch("RESET") }}>reset</button>
        </div>
    )
}
