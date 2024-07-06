import { Typography } from '@mui/material';
import { ReactNode } from 'react';

// TypeScriptの場合、型定義
export type CustomTypographyProps = {
  variant:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2';
  fontSize: number;
  color: string;
  fontFamily: string;
  children: ReactNode;
};

// カスタムTypographyコンポーネント
export const CustomTypography: React.FC<CustomTypographyProps> =
// 名前が無い関数名：constの変数に代入しているだけ
({
  variant,
  fontSize,
  color,
  fontFamily,
  children,
}) => {
  return (
    <Typography
      variant={variant}
      fontSize={fontSize}
      color={color}
      fontFamily={fontFamily}
    >
       サンプル
    </Typography>
  );
};

export default CustomTypography;
