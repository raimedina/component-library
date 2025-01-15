import { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import Accordion from "./Accordion";

const meta: Meta<typeof Accordion> = {
  title: "Components/feedback/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  argTypes: {
    items: {
      control: "object",
      description: "Lista de itens do Accordion",
      defaultValue: [
        { title: "Item 1", content: "Conteúdo 1" },
        { title: "Item 2", content: "Conteúdo 2" },
        { title: "Item 3", content: "Conteúdo 3" },
      ],
    },
    onToggle: {
      action: "Item Toggled",  // ✅ Captura ações automaticamente
      description: "Dispara quando o item do Accordion é clicado",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Accordion>;

const defaultItems = [
  { title: "Item 1", content: "Conteúdo 1" },
  { title: "Item 2", content: "Conteúdo 2" },
  { title: "Item 3", content: "Conteúdo 3" },
];

// 📌 1. Story Default (Controls + Actions)
export const Default: Story = {
  args: {
    items: defaultItems,
  },
};

// 📌 2. Story Interactive (Simulação de Interação)
export const Interactive: Story = {
  args: {
    items: defaultItems,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // ✅ Simula clique no primeiro item
    const firstItem = await canvas.findByText("Item 1");
    await userEvent.click(firstItem);

    // ✅ Verifica se o conteúdo aparece após o clique
    await expect(canvas.getByText("Conteúdo 1")).toBeInTheDocument();
  },
};
