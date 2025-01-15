import { Meta, StoryObj } from "@storybook/react";
import { within, userEvent, waitFor } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import HamburgerMenu from "./HamburgerMenu";

const meta: Meta<typeof HamburgerMenu> = {
  title: "Components/layout/HamburgerMenu",
  component: HamburgerMenu,
  tags: ["autodocs"],
  argTypes: {
    links: {
      control: "object",
      description: "Navigation links for the hamburger menu.",
    },
    onLinkClick: { action: "Menu link clicked" },
  },
};

export default meta;

type Story = StoryObj<typeof HamburgerMenu>;

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

    // Aguarda o botão de menu
    const button = await canvas.findByLabelText("Toggle navigation menu");

    // Clica para abrir o menu
    await userEvent.click(button);

    // Aguarda o item "Services" aparecer no DOM e ser visível
    const menuItem = await waitFor(() => {
      const item = canvas.getByText("Services");
      expect(item).toBeInTheDocument();
      expect(item).toBeVisible();
      return item;
    });

    // Clica no item
    await userEvent.click(menuItem);
  },
};
