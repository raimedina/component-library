import { Meta, StoryObj } from "@storybook/react";
import { within, userEvent, waitFor } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { FloatingLabels, FloatingLabelsProps } from "./FloatingLabels";
import { action } from "@storybook/addon-actions";

const meta: Meta<typeof FloatingLabels> = {
  title: "Components/form/FloatingLabels",
  component: FloatingLabels,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text", defaultValue: "Full Name" },
    placeholder: { control: "text", defaultValue: "Enter your name" },
    value: { control: "text" },
    type: { control: "select", options: ["text", "email", "password"], defaultValue: "text" },
    disabled: { control: "boolean" },
    onChange: { action: "changed" },
  },
};

export default meta;

type Story = StoryObj<FloatingLabelsProps>;

export const Default: Story = {
  args: {
    label: "Full Name",
  },
};

export const Disabled: Story = {
  args: {
    label: "Email",
    disabled: true,
  },
};

export const Interactive: Story = {
  args: {
    label: "Username",
    onChange: action('Input Changed'),
    type: "email"
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const input = await canvas.findByLabelText(args.label);

    const dynamicValue = 'TestUser'; 

    await userEvent.clear(input);
    await userEvent.type(input, dynamicValue);

    await waitFor(() => {
      expect(input).toHaveValue(dynamicValue);
    });
  }
};