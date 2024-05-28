import React, { FC, SelectHTMLAttributes } from 'react';

type Option = {
    value: string;
    label: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    options: Option[];
    label?: string;
}

export function Select({ options, label, ...rest }: SelectProps) {
    return (
        <>
            {
                label ? <label htmlFor="country" className="block text-sm font-normal leading-5 text-[#191c1f]">{label}</label> : null
            }
            <div className={`${label ? "mt-2" : "mt-0"}`}>
                <select {...rest} className='w-full py-3 px-4 rounded-sm focus:border-[#E4E7E9] focus:ring-0 focus:ring-offset-0 border border-solid border-[#E4E7E9]'>
                    {options.map((option, index) => (
                        <option key={index} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
        </>
    )
}