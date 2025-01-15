import { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { ListGroup, ListGroupProps } from "./ListGroup";

const meta: Meta<typeof ListGroup> = {
  title: "Components/display/ListGroup",
  component: ListGroup,
  tags: ["autodocs"],
  argTypes: {
    flush: { control: "boolean", defaultValue: false },
    selectable: { control: "boolean", defaultValue: true },
    onItemSelect: { action: "itemSelected" },
  },
};

export default meta;

type Story = StoryObj<ListGroupProps>;

const defaultItems = [
  { label: 'Item 1' },
  { label: 'Item 2', active: true },
  { label: 'Item 3', disabled: true },
  { label: 'Item 4' },
];

export const Interactive: Story = {
  args: {
    items: defaultItems,
    selectable: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const item = canvas.getByText('Item 4');

    await userEvent.click(item);

    await expect(item).toHaveClass('list-group__item--active');
  },
};
