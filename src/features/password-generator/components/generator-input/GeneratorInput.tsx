import React from 'react';
import { CopyButton, Input } from '../../../../ui';

interface GeneratorInputProps {
  copiedData: string
  value: string
}

export const GeneratorInput = ({ copiedData, value }: GeneratorInputProps): JSX.Element => {
  return (
    <>
      <Input
        value={value}
        readOnly={true}
      >
        <CopyButton
          data={copiedData}
        />
      </Input>
    </>
  )
}
