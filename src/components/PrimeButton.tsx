import React from 'react'

interface PrimeButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  text: string
  submit?: boolean
}

export default function PrimeButton({
  text,
  submit,
  ...props
}: PrimeButtonProps) {
  return (
    <button
      className="flex items-center justify-center w-full p-4 text-lg text-white bg-gray-900 rounded dark:border-2 dark:text-white"
      type={submit ? 'submit' : 'button'}
      {...props}
    >
      {text}
    </button>
  )
}
