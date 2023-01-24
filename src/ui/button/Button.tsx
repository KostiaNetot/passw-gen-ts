import React from 'react';
import './Button.css';

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  label?: string
}

export const Button = ({ label = 'Button', onClick }: ButtonProps): JSX.Element => {
  return (
    <button 
      className='button'
      onClick={onClick}
    >
      { label }
    </button>
  )
}