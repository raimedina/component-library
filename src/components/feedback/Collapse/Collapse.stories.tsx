import { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { Collapse, CollapseProps } from "./Collapse";

const meta: Meta<typeof Collapse> = {
  title: "Components/feedback/Collapse",
  component: Collapse,
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text", defaultValue: "Collapse Title" },
    content: { control: "text", defaultValue: "This is the collapsible content." },
    isOpen: { control: "boolean" },
    disabled: { control: "boolean" },
    onToggle: { action: "toggled" },
  },
};

export default meta;

type Story = StoryObj<CollapseProps>;

export const Default: Story = {
  args: {
    title: "Collapse Section",
    content: "This is the collapsible content.",
  },
};

export const Disabled: Story = {
  args: {
    title: "Disabled Collapse",
    content: "You can't open this.",
    disabled: true,
  },
};

export const Interactive: Story = {
  args: {
    title: "Interactive Collapse",
    content: "This content is revealed when clicked.",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: /interactive collapse/i });
    await userEvent.click(button);
    await expect(canvas.getByText('This content is revealed when clicked.')).toBeInTheDocument();
  },
};
