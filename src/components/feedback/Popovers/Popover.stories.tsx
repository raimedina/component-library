

import React from 'react';  
import { Meta, StoryObj } from "@storybook/react";
import { within, userEvent,waitFor } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { Popover, PopoverProps } from "./Popover";
import { action } from "@storybook/addon-actions";

const meta: Meta<typeof Popover> = {
  title: "Components/feedback/Popover",
  component: Popover,
  tags: ["autodocs"],
  argTypes: {
    content: {
      control: 'text',
      description: 'Content displayed inside the Popover.',
      defaultValue: 'Popover content',
    },
    position: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
      description: 'Position of the Popover.',
    },
    trigger: {
      control: 'select',
      options: ['click'],
      description: 'Event that triggers the Popover.',
    },
  },
};

export default meta;

type Story = StoryObj<PopoverProps>;

export const Default: Story = {
  args: {
    content: 'Popover content',
    position: 'top',
    trigger: 'click',
  },
  render: (args) => (
    <Popover {...args}>
      <button>Click me</button>
    </Popover>
  ),
};



export const Interactive: Story = {
  args: {
    content: 'Interactive popover',
    position: 'right',
    trigger: 'click',
  },
  render: (args) => (
    <Popover {...args}>
      <button onClick={action('Button clicked')}>Click me</button> 
    </Popover>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = await canvas.findByRole('button', { name: /click me/i });

    await userEvent.click(button);

    await waitFor(() => {
      expect(canvas.getByText('Interactive popover')).toBeVisible();
    });
  },
};
