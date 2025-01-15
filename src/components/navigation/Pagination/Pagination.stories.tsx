import { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { Pagination, PaginationProps } from "./Pagination";

const meta: Meta<typeof Pagination> = {
  title: "Components/navigation/Pagination",
  component: Pagination,
  tags: ["autodocs"],
  parameters: {
    controls: { expanded: true },
    actions: { argTypesRegex: "^on.*" },
  },
  argTypes: {
    totalPages: { control: "number", defaultValue: 5, description: "Total number of pages" },
    currentPage: { control: "number", defaultValue: 1, description: "Current active page" },
    onPageChange: { action: "pageChanged" },
  },
};

export default meta;

type Story = StoryObj<PaginationProps>;

export const Default: Story = {
  args: {
    totalPages: 5,
    currentPage: 1,
  },
};

export const Interactive: Story = {
  args: {
    totalPages: 5,
    currentPage: 1,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const nextButton = canvas.getByText('Next');
    await userEvent.click(nextButton);
    const activeButton = await canvas.findByText('2');
    await expect(activeButton).toHaveClass('pagination__button--active');
  },
};