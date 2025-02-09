
import { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import Badge from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "Components/common/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text", description: "Texto do badge" },
    variant: {
      control: "select",
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'],
    },
    size: {
      control: "select",
      options: ['small', 'medium', 'large'],
    },
    rounded: { control: "boolean" },
    onClick: { action: "clicked" },  
  },
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    label: "Default Badge",
    variant: "primary",
    size: "medium",
    rounded: false,
  },
};

export const Interactive: Story = {
  args: {
    label: "Interactive Badge",
    variant: "info",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const badge = await canvas.findByText("Interactive Badge");

    await userEvent.click(badge);

    expect(badge).toBeInTheDocument();
  },
};
