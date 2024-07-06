import type { Meta, StoryObj } from '@storybook/react';
import { Ratings, TRatingProps } from '../app/ui/customers/Ratings';

const meta = {
  title: 'ui/Ratings',
  component: Ratings,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: { },
  },
  args: {},
} satisfies Meta<typeof Ratings>;

export default meta;
type Story = StoryObj<typeof meta>;
export const BaseRatings = {};

export const Primary: Story = {
  args: {
    value:1
  },
};