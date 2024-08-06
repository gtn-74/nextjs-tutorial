import * as React from 'react';
import { SampleButton } from './style';
import { purple, lime } from '@mui/material/colors';
import { Button } from '@mui/material';

export const ContainedButtons = () => {
  const primary = lime[900];
  return (
    <SampleButton  variant="contained">
      Contained
    </SampleButton>
  );
};
