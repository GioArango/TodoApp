import React from 'react'

export const Button = ({ color, hoverColor, title }) => {

    return (
        <button className={`bg-${color}-500 hover:bg-${hoverColor}-300 text-white font-bold py-2 px-4 rounded w-2/12`}>
            { title }
        </button>
    )
}
