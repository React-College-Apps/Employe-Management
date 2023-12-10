import React from 'react';

interface IButtonProps {
    children: React.ReactNode, // Changed to React.ReactNode
    className?: string,
    onClick?: () => any
}

const Button: React.FC<IButtonProps> = ({ children, className, onClick }) => {
    return (
        <button className={`block rounded-md px-3 py-2 text-center font-semibold text-white shadow-sm ${className}`} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button;
