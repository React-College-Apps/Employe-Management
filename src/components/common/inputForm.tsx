import React from 'react'

import IInputProps from '../../core/interface/PropInterface/IInputProps'


const InputForm: React.FC<IInputProps> = ({label,labelClassName,type,className}) => {
    return (
        <div>
            <label
                htmlFor={label}
                className={`block text-sm font-medium leading-6 text-gray-900 ${labelClassName}`}
            >
                {label}
            </label>
            <div className="mt-2">
                <input
                    id={label}
                    name={label}
                    type={type}
                    autoComplete="current-password"
                    className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 ${className}`}
                />
            </div>
        </div>
    )
}

export default InputForm