import { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import Card from "./Card";

const meta: Meta<typeof Card> = {
  title: "Components/display/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    image: { control: "text" },
    link: { control: "text" },
    buttonLabel: { control: "text" },
    size: { control: "select", options: ['small', 'medium', 'large'] },
    textAlign: { control: "select", options: ['left', 'center', 'right'] },
    borderStyle: { control: "select", options: ['solid', 'dashed', 'none'] },
    layout: { control: "select", options: ['row', 'column'] },
    onButtonClick: { action: "buttonClicked" },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: "Default Card",
    description: "This is a responsive card component.",
  },
};

export const WithButton: Story = {
  args: {
    title: "Card with Button",
    description: "This card includes a button.",
    buttonLabel: "Click Me",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = await canvas.findByText("Click Me");
    await userEvent.click(button);
    expect(button).toBeInTheDocument();
  },
};

export const WithLinkAndButton: Story = {
  args: {
    title: "Card with Link and Button",
    description: "This card has both a link and a button.",
    link: "https://example.com",
    buttonLabel: "Click Me",
  },
};

export const CustomStyle: Story = {
  args: {
    title: "Custom Styled Card",
    description: "Card with custom border and text alignment.",
    borderStyle: "dashed",
    textAlign: "right",
    size: "large",
  },
};

export const WithImage: Story = {
  args: {
    title: "Card with Custom Image",
    description: "This card has a valid image.",
    image: "https://picsum.photos/400/200",
  },
};
