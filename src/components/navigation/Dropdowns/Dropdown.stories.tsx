import { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { Dropdown, DropdownProps } from "./Dropdown";

const meta: Meta<typeof Dropdown> = {
  title: "Components/navigation/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text", defaultValue: "Dropdown" },
    position: { control: "select", options: ["top", "bottom", "left", "right"] },
  },
};

export default meta;

type Story = StoryObj<DropdownProps>;

const defaultItems = [
  { label: 'Option 1', onClick: () => console.log('Option 1') },
  { label: 'Option 2', onClick: () => console.log('Option 2') },
  { label: 'Option 3', onClick: () => console.log('Option 3'), disabled: true },
];

export const Default: Story = {
  args: {
    label: "Dropdown",
    items: defaultItems,
  },
};

export const Interactive: Story = {
  args: {
    label: "Dropdown",
    items: defaultItems,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByText('Dropdown');
    await userEvent.click(button);
    const option = canvas.getByText('Option 1');
    await userEvent.click(option);
    await expect(option).toBeInTheDocument();
  },
};
