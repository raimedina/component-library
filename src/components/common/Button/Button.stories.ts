import { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "./Button";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

const meta: Meta<ButtonProps> = {
  title: "Components/common/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'primary', 'secondary', 'success', 
        'danger', 'warning', 'info', 
        'light', 'dark', 'link'
      ],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    disabled: { control: 'boolean' },
    onClick: { action: 'clicked' }
  },
};

export default meta;

type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
  args: {
    label: "Primary Button",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    label: "Secondary Button",
    variant: "secondary",
  },
};

export const Success: Story = {
  args: {
    label: "Success Button",
    variant: "success",
  },
};

export const Danger: Story = {
  args: {
    label: "Danger Button",
    variant: "danger",
  },
};

export const Interactive: Story = {
  args: {
    label: "Click Me",
    variant: "primary",
  },
  play: async ({ canvasElement }) => {
    const button = within(canvasElement).getByText("Click Me");
    await userEvent.click(button);
    expect(button).toBeInTheDocument();
  },
};
