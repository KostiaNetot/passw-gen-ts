import React from 'react';

import './Input.css';

interface InputProps {
  value: string | number
  children: React.ReactNode
  readOnly?: boolean
}

export const Input = ({ value, children, readOnly }: InputProps): JSX.Element => {
  return (
    <div className='inputRoot'>
      <input 
        type='text' 
        className='input'
        value={value}
        readOnly={readOnly}
      />
      { children }  
    </div>
  )
}
