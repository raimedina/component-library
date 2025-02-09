import { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import CloseButton from "./CloseButton";
import { userEvent, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

const meta: Meta<typeof CloseButton> = {
  title: "Components/common/CloseButton",
  component: CloseButton,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: "Size of the close button.",
    },
    onClick: { action: 'clicked' }, 
  },
};

export default meta;

type Story = StoryObj<typeof CloseButton>;

export const Default: StoryObj<typeof CloseButton> = {
  args: {
    onClick: action('Close button clicked'), 
  },
};


export const Large: Story = {
  args: {
    size: 'large',
    onClick: action('Large button clicked'),
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    onClick: action('Small button clicked'),
  },
};
export const Interactive: StoryObj<typeof CloseButton> = {
  args: {
    size: "medium",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: /close/i });

    await userEvent.click(button);
    await expect(button).toHaveClass('close-button--medium');
  },
};
