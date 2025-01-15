import { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import Breadcrumb from "./Breadcrumb";


const meta: Meta<typeof Breadcrumb> = {
  title: "Components/navigation/Breadcrumb",
  component: Breadcrumb,
  tags: ["autodocs"],
  argTypes: {
    items: {
      control: "object",
      description: "List of breadcrumb items",
    },
    onClick: { action: "Breadcrumb item clicked" },
  },
};

export default meta;

type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {
  args: {
    items: [
      { label: "Home", href: "#" },
      { label: "Library", href: "#" },
      { label: "Data", isActive: true },
    ],
  },
};

export const Interactive: Story = {
  args: {
    items: [
      { label: "Home", href: "#" },
      { label: "About", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const aboutLink = await canvas.findByText("About");

    await userEvent.click(aboutLink);
    expect(aboutLink).toBeInTheDocument();
  },
};

