import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../..';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Design System/Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    type: 'primary',
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    type: 'secondary',
    label: 'Button',
  },
};

export const Tertiary: Story = {
  args: {
    type: 'tertiary',
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
