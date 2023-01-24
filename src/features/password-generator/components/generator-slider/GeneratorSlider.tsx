import React, { useState } from 'react';
import { Slider } from '../../../../ui';

interface GeneratorSliderProps {
  value: string | number
  onSliderChange: React.FormEventHandler<HTMLInputElement>
}

export const GeneratorSlider = ({ onSliderChange, value }: GeneratorSliderProps): JSX.Element => {

  return (
    <>
      <Slider 
        label={`Character length: ${value}`}
        onChange={onSliderChange} 
        min={4}
        max={20}
        id={'characterLength'}
        name={'characterLength'}
        step={1}
        value={value}
      />
    </>
  )
}
