import React, { useState } from 'react';
import { Button } from '../../ui';
import { CheckboxGroup, GeneratorInput, GeneratorSlider } from './components';
import { CHARACTERS, DEFAULT_CHARS_LENGTH } from './constants';

import './PasswordGenerator.css';

export const PasswordGenerator = (): JSX.Element => {
  const [password, setPassword] = useState<string>('');
  const [charsLength, setCharsLength] = useState<number>(DEFAULT_CHARS_LENGTH);
  const [selectedChars, setSelectedChars] = useState<[string]>([CHARACTERS.lowercase]);

  const changeCharsLength = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCharsLength(+e.target.value);
  }

  const generatePassword = (): void => {
    setPassword('');
    const characters = selectedChars.join('');

    for (let i = 0; i <= charsLength - 1; i++) {
      const randomNumber = Math.floor(Math.random()* characters.length);
      setPassword(passw => passw += characters.substring(randomNumber, randomNumber + 1));
    }
  }

  return (
    <div className='passwordGenerator'>
      <GeneratorInput 
        copiedData={password}
        value={password} 
      />
      <GeneratorSlider
        onSliderChange={changeCharsLength} 
        value={charsLength}
      />
      <CheckboxGroup
        selectedChars={selectedChars}
        setSelectedChars={setSelectedChars}
      />
      <Button 
        onClick={generatePassword} 
        label={'Generate Password'}
      />
    </div>
  )
}
