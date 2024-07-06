'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

type TRating = {
  name: string;
  value: number;
};

export default function BasicRating() {
  const [value, setValue] = React.useState<number | null>(2);

  return (
    <>
      <Typography component="legend">test rating </Typography>
      <Rating name="no-value" value={null} />
    </>
  );
}
