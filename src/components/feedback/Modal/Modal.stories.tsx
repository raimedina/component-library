import React, { useState } from 'react';
import { Meta, StoryFn } from "@storybook/react";
import { within, userEvent, waitFor } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { Modal, ModalProps } from "./Modal";
import { action } from "@storybook/addon-actions";

const meta: Meta<typeof Modal> = {
  title: "Components/feedback/Modal",
  component: Modal,
  tags: ["autodocs"],
  argTypes: {
    isOpen: { control: "boolean" },
    title: { control: "text" },
    size: { control: "select", options: ["small", "medium", "large"] },
    onClose: { action: 'closed' },  // ✅ Action configurado
  },
};

export default meta;

const Template: StoryFn<ModalProps> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal
        {...args}
        isOpen={isOpen}
        onClose={() => {
          args.onClose && args.onClose();  // ✅ Registra o Action
          setTimeout(() => setIsOpen(false), 500);  // ✅ Fechamento com atraso
        }}
      >
        <p>This is modal content.</p>
      </Modal>
    </>
  );
};
export const Interactive = Template.bind({});
Interactive.args = {
  title: "Interactive Modal",
  size: "medium",
  onClose: action('Modal closed'),  // ✅ Action configurado
};

Interactive.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  
  // ✅ Primeiro abre o modal
  const openButton = canvas.getByText('Open Modal');
  await userEvent.click(openButton);

  // ✅ Agora busca o botão de fechar
  const closeButton = await canvas.findByLabelText('Close');
  await userEvent.click(closeButton);

  await waitFor(() => {
    expect(canvas.queryByLabelText('Close')).not.toBeInTheDocument();
  });
};

