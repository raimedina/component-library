import { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { InputGroup, InputGroupProps } from "./InputGroup";

const meta: Meta<typeof InputGroup> = {
  title: "Components/form/InputGroup",
  component: InputGroup,
  tags: ["autodocs"],
  parameters: {
    controls: { expanded: true },
    actions: { argTypesRegex: "^on.*" },
  },
  argTypes: {
    prepend: { control: "text", description: "Content before the input." },
    append: { control: "text", description: "Content after the input." },
    placeholder: { control: "text", defaultValue: "Enter text" },
    value: { control: "text" },
    disabled: { control: "boolean" },
    onChange: { action: "changed" },
  },
};

export default meta;

type Story = StoryObj<InputGroupProps>;

export const Default: Story = {
  args: {
    placeholder: "Type here...",
  },
};

export const WithPrependAppend: Story = {
  args: {
    prepend: "@",
    append: ".com",
    placeholder: "username",
  },
};

export const Interactive: Story = {
  args: {
    prepend: "$",
    placeholder: "Amount",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText("Amount");
    await userEvent.clear(input);
    await userEvent.type(input, "100");
    await expect(input).toHaveValue("100");
  },
};