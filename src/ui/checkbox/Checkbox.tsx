import React from 'react';

import './Checkbox.css';

interface CheckboxProps extends React.HTMLProps<HTMLInputElement> {
  label: string
  isChecked: boolean
}

export const Checkbox = ({ label, isChecked, name, value, onChange }: CheckboxProps): JSX.Element => {

  return (
    <div className='checkboxRoot'>
      <label>
        { label }
        <input  
          type='checkbox'
          checked={isChecked}
          name={name}
          value={value}
          onChange={onChange}
        />
        <span className='checkmark'></span>
      </label>
    </div>
  )
}
