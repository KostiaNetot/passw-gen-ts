import React from 'react';
import { JsxElement } from 'typescript';

import './CopyButton.css';

interface CopyButtonProps {
  data: string
}

export const CopyButton = ({ data }: CopyButtonProps): JSX.Element => {
  const handleClick = (): void => {
    if (!data) return 
    
    navigator.clipboard.writeText(data)
    alert('Copied');
  }

  return (
    <div
      className='copyButton'
      onClick={handleClick}
    ></div>
  )
}
