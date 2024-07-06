import { Inter,Lusitana, Noto_Sans_JP } from 'next/font/google';
import type { Meta, StoryObj } from '@storybook/react';
import {
  CustomTypography,
  CustomTypographyProps,
} from '../app/ui/customers/typography';

const meta = {
  title: 'ui/CustomTypography',
  component: CustomTypography,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: 'タグ選択',
      type:'string',
      control: 'select',
      options: [
        'h1',
        'h2',
        'h3',
        'h4',
        'subtitles1',
        'subtitle2',
        'body1',
        'body2',
      ],
    },
    fontSize: { description: 'fontsize',type:'string', control: 'text' },
    color: {description: 'fontsize', control: 'color'},
    fontFamily: {description: 'タグ選択',
    control: 'select',
    options: [
      'Noto_Sans_JP',
      'Lusitana',
      'Inter',
    ],},
    children: {},
  },
  args: { variant: 'h2' },
} satisfies Meta<CustomTypographyProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BaseCustomTypography = {};

export const CustomTypographyβ = {
  args: {
    variant: 'h2',
    fontSize: 5,
    taskId: '',
  },
};
