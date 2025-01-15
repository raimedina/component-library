import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Spinner, SpinnerProps } from './Spinner';
import { within, userEvent, waitFor } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { fn } from '@storybook/test';


export default {
  title: 'Components/common/Spinner',
  component: Spinner,
  tags: ["autodocs"],
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    variant: { control: 'select', options: ['primary', 'secondary', 'success', 'danger'] },
    loading: { control: 'boolean' },
  },
} as Meta<SpinnerProps>;

const Template: StoryFn<SpinnerProps> = (args) => {
  const [loading, setLoading] = useState(args.loading);

  return (
    <div>
      <button onClick={() => setLoading((prev) => !prev)}>
        {loading ? 'Stop Spinner' : 'Start Spinner'}
      </button>
      <Spinner {...args} loading={loading} />
    </div>
  );
};


export const Interactive = Template.bind({});
Interactive.args = {
  size: 'medium',
  variant: 'primary',
  loading: true,
  onStart: fn(),  
  onStop: fn(),   
};

Interactive.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  
  const button = await canvas.findByRole('button', { name: /stop spinner/i });

  await userEvent.click(button);

  await waitFor(() => {
    expect(canvas.queryByRole('status')).not.toBeInTheDocument();
  });
};
