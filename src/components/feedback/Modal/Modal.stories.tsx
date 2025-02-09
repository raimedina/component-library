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
    onClose: { action: 'closed' }, 
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
          args.onClose && args.onClose(); 
          setTimeout(() => setIsOpen(false), 500); 
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
  onClose: action('Modal closed'), 
};

Interactive.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const openButton = canvas.getByText('Open Modal');
  await userEvent.click(openButton);

  const closeButton = await canvas.findByLabelText('Close');
  await userEvent.click(closeButton);

  await waitFor(() => {
    expect(canvas.queryByLabelText('Close')).not.toBeInTheDocument();
  });
};

