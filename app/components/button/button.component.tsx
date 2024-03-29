import React, { ButtonHTMLAttributes } from "react";
import "./button.styles.scss";

const BUTTON_TYPE_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode,
    buttonType?: string
}

const Button = ({children, buttonType, ...otherProps}: ButtonProps) => {
    return(
        <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
            {...otherProps}
        >
            {children}
        </button>
    )
}

export default Button;