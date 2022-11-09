import React from "react";
import './buttons.css'

const Button = props => {
    console.log(props.children)
    return (
        <button
        onClick={props.onClick}
        className={''}
        disabled={props.disabled}

        >
            {props.children}
        </button>
    )
}

export default Button;

