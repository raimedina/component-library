import { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { FormControl, FormControlProps } from "./FormControl";

const meta: Meta<typeof FormControl> = {
  title: "Components/form/FormControl",
  component: FormControl,
  tags: ["autodocs"],
  parameters: {
    controls: { expanded: true },
    actions: { argTypesRegex: "^on.*" },
  },
  argTypes: {
    label: {
      control: "text",
      defaultValue: "Name",
      description: "Label displayed above the input field",
    },
    placeholder: {
      control: "text",
      defaultValue: "Enter your name",
      description: "Placeholder text inside the input",
    },
    value: {
      control: "text",
      description: "Value of the input field",
    },
    disabled: {
      control: "boolean",
      description: "Disables the input when true",
    },
    required: {
      control: "boolean",
      description: "Marks the input as required",
    },
    error: {
      control: "text",
      description: "Displays an error message below the input",
    },
    onChange: {
      action: "changed",
      description: "Triggered when the input value changes",
    },
  },
};

export default meta;

type Story = StoryObj<FormControlProps>;

export const Default: Story = {
  args: {
    label: "Name",
    placeholder: "Enter your name",
  },
};

export const WithError: Story = {
  args: {
    label: "Email",
    placeholder: "Enter your email",
    error: "Invalid email address",
  },
};

export const Interactive: Story = {
  args: {
    label: "Username",
    placeholder: "Enter your username",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText("Enter your username");

    await userEvent.type(input, "TestUser");
    await expect(input).toHaveValue("TestUser");
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Field",
    placeholder: "Cannot type here",
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText("Cannot type here");

    await expect(input).toBeDisabled();
    await userEvent.type(input, "Trying to type");
    await expect(input).toHaveValue("");
  },
};

export const RequiredField: Story = {
  args: {
    label: "Required Field",
    placeholder: "Required input",
    required: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText("Required input");

    await userEvent.click(input);
    await userEvent.tab();

    await expect(input).toHaveAttribute("aria-invalid", "true");
  },
};
