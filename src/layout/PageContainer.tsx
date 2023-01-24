import React from 'react';

import './PageContainer.css';

interface PageContainerProps {
  children: JSX.Element
}

export const PageContainer = ({ children }: PageContainerProps): JSX.Element => {
  return (
    <div className='pageContainer'>
      { children }
    </div>
  )
}
