import React, { useContext } from 'react'
import { addCount, removeCount, resetCount } from '../Contents/TongHop/CountAction';
import { countContext } from '../Contents/TongHop/CountContext';


export default function CountView() {
    const { count, dispatch } = useContext(countContext);
    return (
        <div>
            <h1>bo dem hien thi: {count}</h1>
            <button onClick={() => dispatch(addCount())}>ADD</button>
            <button onClick={() => dispatch(removeCount())}>REMOVE</button>
            <button onClick={() => dispatch(resetCount())}>RESET</button>
        </div>
    )
}
