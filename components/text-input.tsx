import React from 'react'
import Link from 'next/link'

type textInputProps = {
    string: string;
    placeholder: string;
    error: string;
    onUpdate: (value:string) => void;
    className: string;
}

const TextInput = ({string, placeholder, error, onUpdate, className} : textInputProps) => {
  return (
    <>
        <input 
        placeholder={placeholder} 
        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        value={string || ""}
        onChange={(e) => onUpdate(e.target.value)}
        type='text'
        autoComplete='off'
        />

        <div className='text-red-500 text-[14px] font-semibold'> 
          {error? (error) : null}
        </div>
    </>
  )
}

export default TextInput

