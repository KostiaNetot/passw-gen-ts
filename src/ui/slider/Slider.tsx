import React from 'react';

import './Slider.css';

interface SliderProps {
  id: string
  label?: string
  min: string | number
  max: string | number
  name: string
  onChange: React.FormEventHandler<HTMLInputElement>
  step: string | number
  value: string | number
}

export const Slider = ({ 
  id,
  label, 
  min,
  max,
  name,
  onChange, 
  step,
  value,
 }: SliderProps): JSX.Element => {
  return (
    <div className='sliderRoot'>
      { label && (
        <label htmlFor={id}>{ label }</label>
      ) }
      <input
        id={id} 
        name={name}
        type='range'
        onChange={onChange}
        min={min}
        max={max}
        step={step}
        defaultValue={value}
      />
    </div>
  )
}
