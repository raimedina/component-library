import { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import ButtonGroup from "./ButtonGroup";

const meta: Meta<typeof ButtonGroup> = {
  title: "Components/common/ButtonGroup",
  component: ButtonGroup,
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
    onButtonClick: { action: "buttonClicked" },
  },
};

export default meta;

type Story = StoryObj<typeof ButtonGroup>;

export const Horizontal: Story = {
  args: {
    orientation: "horizontal",
    buttons: [
      { label: "Primary", variant: "primary" },
      { label: "Secondary", variant: "secondary" },
      { label: "Success", variant: "success" },
    ],
  },
};

export const Vertical: Story = {
  args: {
    orientation: "vertical",
    buttons: [
      { label: "Danger", variant: "danger" },
      { label: "Warning", variant: "warning" },
      { label: "Info", variant: "info" },
    ],
  },
};

export const Interactive: Story = {
  args: {
    orientation: "horizontal",
    buttons: [
      { label: "Click Me", variant: "primary" },
    ],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = await canvas.findByText("Click Me");
    await userEvent.click(button);
    expect(button).toBeInTheDocument();
  },
};
