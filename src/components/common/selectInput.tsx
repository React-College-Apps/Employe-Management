import React from 'react'

interface ISelectInput {
    value?: string,
    onChange: (value: any) => any,
    title: string,
    options?: any,
    id?: string,
    className?: string,
}
const SelectInput: React.FC<ISelectInput> = ({ value, onChange, title, options, id,className }) => {
    return (
        <div className={className}>
            <label htmlFor={id} className="block text-sm font-medium leading-6 text-gray-900">{title}</label>
            <select
                value={value}
                onChange={(e: any) => onChange(e.target.value)}
                id={id}
                name="name"
                className="outline-none mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
            >
                <option value=''>Select Option</option>
                {options.map((opt: any, index: any) => (
                    <option key={index} value={opt.value}>{opt.title}</option>
                ))}

            </select>
        </div>
    )
}

export default SelectInput