import { Meta, StoryObj } from "@storybook/react";
import { ThemeToggle } from "./ThemeToggle";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

const meta: Meta<typeof ThemeToggle> = {
  title: "Components/common/ThemeToggle",
  component: ThemeToggle,
  tags: ["autodocs"],
  argTypes: {
    onToggle: { action: "Theme toggled" },
  },
};

export default meta;

type Story = StoryObj<typeof ThemeToggle>;

export const Default: Story = {
  args: {},
};

export const Interactive: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const { findByLabelText } = within(canvasElement);
    const toggleButton = await findByLabelText("Toggle Theme");

    await userEvent.click(toggleButton);
    expect(toggleButton).toBeChecked();

    await userEvent.click(toggleButton);
    expect(toggleButton).not.toBeChecked();
  },
};
