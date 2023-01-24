import React, { useState } from 'react';
import { Checkbox } from '../../../../ui';
import { CHARACTERS } from '../../constants';
import { generateCheckboxGroupData } from '../../helpers';

interface CheckboxGroupProps {
  selectedChars: [string]
  setSelectedChars: React.Dispatch<React.SetStateAction<[string]>>
}

export const CheckboxGroup = ({ 
  selectedChars, 
  setSelectedChars,
 }: CheckboxGroupProps): JSX.Element => {
  const [characters, setCharacters] = useState(generateCheckboxGroupData());

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value, checked } = e.target;
    if (!checked && selectedChars.length <= 1) return;

    setCharacters(chars => ({
      ...chars,
      [value]: checked,
    }));

    checked 
      // @ts-ignore
      ? setSelectedChars(sel => [...sel, CHARACTERS[value]] as React.SetStateAction<[string]>)
      // @ts-ignore  
      : setSelectedChars(sel => sel.filter(el => el !== CHARACTERS[value]))
  }
  
  return (
    <div>
      {Object.entries(characters).map((char: any) => (
        <Checkbox 
          key={char[0]}
          name='characters' 
          value={char[0]} 
          label={`Include ${char[0]}`} 
          isChecked={char[1]}
          onChange={handleChange}
        />    
      ))}
    </div>
  )
}
