import { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import Navbar from "./Navbar";

const meta: Meta<typeof Navbar> = {
  title: "Components/layout/Navbar",
  component: Navbar,
  tags: ["autodocs"],
  argTypes: {
    links: {
      control: "object",
      description: "Navigation links for the navbar.",
    },
    onLinkClick: { action: "Link clicked" },
  },
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  args: {
    links: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Projects", href: "#projects" },
      { label: "Contact", href: "#contact" },
    ],
  },
};

export const Interactive: Story = {
  args: {
    links: [
      { label: "Home", href: "#home" },
      { label: "Services", href: "#services" },
      { label: "Contact", href: "#contact" },
    ],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const link = await canvas.findByText("Services");

    await userEvent.click(link);
    expect(link).toBeInTheDocument();
  },
};
