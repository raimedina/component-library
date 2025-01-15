import { Meta, StoryObj } from "@storybook/react";
import { within, userEvent,waitFor } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { ChecksRadios, ChecksRadiosProps } from "./ChecksRadios";

const meta: Meta<typeof ChecksRadios> = {
  title: "Components/form/ChecksRadios",
  component: ChecksRadios,
  tags: ["autodocs"],
  argTypes: {
    type: { control: "select", options: ["checkbox", "radio"], defaultValue: "checkbox" },
    name: { control: "text", defaultValue: "options" },
    onChange: { action: "changed" },
  },
};

export default meta;

type Story = StoryObj<ChecksRadiosProps>;

const options = [
  { label: "Option 1", value: "1" },
  { label: "Option 2", value: "2" },
  { label: "Option 3", value: "3", disabled: true },
];

export const Checkbox: Story = {
  args: {
    type: "checkbox",
    name: "checkbox-group",
    options,
  },
};

export const Radio: Story = {
  args: {
    type: "radio",
    name: "radio-group",
    options,
  },
};

export const Interactive: Story = {
  args: {
    type: "checkbox",
    name: "checkbox-group",
    options,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const option1 = await canvas.findByLabelText('Option 1');
    await userEvent.click(option1);
    await waitFor(() => expect(option1).toBeChecked());
  },
};