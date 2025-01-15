import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { within, userEvent, waitFor } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { Select, SelectProps } from './Select';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof Select> = {
  title: 'Components/form/Select',
  component: Select,
  tags: ["autodocs"],
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'], description: 'Select size' },
    variant: { control: 'select', options: ['primary', 'secondary', 'success', 'danger'], description: 'Variant style' },
    disabled: { control: 'boolean', description: 'Disable the select' },
    placeholder: { control: 'text', description: 'Placeholder text' },
  },
};

export default meta;

const Template: StoryFn<SelectProps> = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ],
  placeholder: 'Select an option',
  size: 'medium',
  variant: 'primary',
  disabled: false,
  onChange: action('Option selected'),
};

export const Interactive = Template.bind({});
Interactive.args = { ...Default.args };

Interactive.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const select = await canvas.findByRole('combobox');

  await userEvent.selectOptions(select, ['option2']);

  await waitFor(() => {
    expect(select).toHaveValue('option2');
  });
};
