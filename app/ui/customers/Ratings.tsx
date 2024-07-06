// 'use client';
import * as React from 'react';
import { Rating } from '@mui/material';

export type TRatingProps = {
  // name: string;
  value?: number;
  //   onChange?: () => void;
};

export function Ratings() {
  return (
    <div>
      {/* valueに持たせた値がスターに色をつける様子 */}
      <Rating size="large" name="no-value" value={10} />
    </div>
  );
}
