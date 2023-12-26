import React from 'react'

export interface InputFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  name?: string
  errorMessages?: string
}

export function InputField({
  label,
  name,
  errorMessages,
  ...rest
}: InputFieldProps) {
  return (
    <div className="flex flex-col gap-2 mb-3">
      <label className="block mb-2 text-xs font-bold uppercase" htmlFor={name}>
        {label}
      </label>
      <input
        className="w-full p-2 text-lg bg-gray-100 border border-gray-400 text-black rounded"
        id={name}
        name={name}
        {...rest}
      />

      {errorMessages && (
        <span className="text-xs text-red-500">{errorMessages}</span>
      )}
    </div>
  )
}
