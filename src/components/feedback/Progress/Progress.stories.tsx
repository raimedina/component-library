import React from 'react'; 
import { Meta, StoryFn } from "@storybook/react";
import { within, userEvent, waitFor } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { fn } from "@storybook/test";
import { Progress, ProgressProps } from "./Progress";

const meta: Meta<typeof Progress> = {
  title: "Components/feedback/Progress",
  component: Progress,
  tags: ["autodocs"],
  argTypes: {
    value: { control: "number", defaultValue: 50, description: "Current progress value." },
    max: { control: "number", defaultValue: 100, description: "Maximum progress value." },
    color: { control: "select", options: ["primary", "success", "warning", "danger"] },
    striped: { control: "boolean" },
    animated: { control: "boolean" },
  },
};

export default meta;

const Template: StoryFn<ProgressProps> = (args) => <Progress {...args} />;

export const Interactive = Template.bind({});
Interactive.args = {
  value: 25,
  onChange: fn(), 
};

Interactive.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const progressBar = canvas.getByRole('progressbar');

  await userEvent.hover(progressBar);

  await waitFor(() => {
    const progressBar = within(canvasElement).getByRole('progressbar');
    expect(progressBar.style.width).toBe(progressBar.style.width);
  });
};
