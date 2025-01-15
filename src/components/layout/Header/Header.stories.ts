import { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import Header from "./Header";

const meta: Meta<typeof Header> = {
  title: "Components/layout/Header",
  component: Header,
  tags: ["autodocs"],
  argTypes: {
    logo: {
      control: "text",
      description: "URL for the logo image.",
      defaultValue: "",
    },
    links: {
      control: "object",
      description: "Navigation links for the Header.",
      defaultValue: [
        { label: "Home", href: "#home" },
        { label: "About", href: "#about" },
        { label: "Projects", href: "#projects" },
        { label: "Contact", href: "#contact" },
      ],
    },
    onLinkClick: { action: "Link clicked" },
  },
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    logo: "",
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
