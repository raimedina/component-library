import { Meta, StoryObj } from "@storybook/react";
import { within, fireEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { Range, RangeProps } from "./Range";

const meta: Meta<typeof Range> = {
  title: "Components/form/Range",
  component: Range,
  tags: ["autodocs"],
  parameters: {
    controls: { expanded: true },
    actions: { argTypesRegex: "^on.*" },
  },
  argTypes: {
    min: { control: "number", defaultValue: 0 },
    max: { control: "number", defaultValue: 100 },
    step: { control: "number", defaultValue: 1 },
    value: { control: "number", defaultValue: 50 },
    disabled: { control: "boolean" },
    onChange: { action: "valueChanged" },
  },
};

export default meta;

type Story = StoryObj<RangeProps>;

export const Default: Story = {
  args: {
    min: 0,
    max: 100,
    step: 1,
    value: 50,
  },
};

export const Disabled: Story = {
  args: {
    min: 0,
    max: 100,
    step: 1,
    value: 50,
    disabled: true,
  },
};

export const Interactive: Story = {
  args: {
    min: 0,
    max: 100,
    step: 4,
    value: 40, 
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const slider = canvas.getByRole("slider");

    const currentValue = Number(slider.getAttribute("value")) || args.value || 0;

    const expectedValue = Math.min(currentValue + (args.step || 1), args.max || 100);

    fireEvent.change(slider, { target: { value: expectedValue.toString() } });

    await expect(slider).toHaveValue(expectedValue.toString());
  },
};
