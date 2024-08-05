import React from 'react'
import Example from './Header/Example'

export default function Parent({ number }) {
    return (
        <div>
            <h1>day la parent {number}</h1>

            <Example example={number} />
        </div>
    )
}
