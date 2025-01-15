import { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import Carousel from "./Carousel";

const meta: Meta<typeof Carousel> = {
  title: "Components/display/Carousel",
  component: Carousel,
  tags: ["autodocs"],
  argTypes: {
    autoPlay: { control: "boolean", description: "Enable automatic slide transition." },
    interval: { control: "number", description: "Autoplay interval in milliseconds." },
    onSlideChange: { action: "slideChanged" },
  },
};

export default meta;

type Story = StoryObj<typeof Carousel>;

const slidesData = [
  { src: "https://picsum.photos/600/300?random=1", alt: "Slide 1" },
  { src: "https://picsum.photos/600/300?random=2", alt: "Slide 2" },
  { src: "https://picsum.photos/600/300?random=3", alt: "Slide 3" },
];

export const Default: Story = {
  args: {
    slides: slidesData,
    autoPlay: false,
  },
};

export const AutoPlay: Story = {
  args: {
    slides: slidesData,
    autoPlay: true,
    interval: 2000,
  },
};

export const Interactive: Story = {
  args: {
    slides: slidesData,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const nextButton = await canvas.findByLabelText("Next Slide");

    await userEvent.click(nextButton);
    expect(await canvas.findByAltText("Slide 2")).toBeInTheDocument();
  },
};
