import React from 'react';
import { Tooltips, TooltipsProps } from './Tooltips';
import { Meta, StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { within, userEvent, waitFor } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

export default {
  title: 'Components/common/Tooltip',
  component: Tooltips,
  tags: ["autodocs"],
  argTypes: {
    text: { control: 'text', description: 'Tooltip content' },
    position: {
      control: { type: 'select' },
      options: ['top', 'right', 'bottom', 'left'],
      description: 'Tooltip position relative to the target',
    },
  },
} as Meta<TooltipsProps>;


const Template: StoryFn<TooltipsProps> = (args) => (
  <Tooltips {...args}>
    <button>Hover me</button>
  </Tooltips>
);

export const Interactive = Template.bind({});
Interactive.args = {
  text: 'Interactive Tooltip',
  position: 'top',
  onShow: action('Tooltip shown'),  // ✅ Action para registrar o hover
};

Interactive.play = async ({ canvasElement }) => {
  await waitFor(async () => {
    const canvas = within(canvasElement);
    const button = await canvas.findByRole('button', { name: /hover me/i });

    await userEvent.hover(button);

    expect(canvas.getByRole('tooltip')).toBeVisible();

    await userEvent.unhover(button);

    expect(canvas.queryByRole('tooltip')).not.toBeInTheDocument();
  });
};
