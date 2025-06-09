import type { Meta, StoryObj } from "@storybook/react";
import Select from "./Select";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  argTypes: {
    options: { control: "object" },
    disabled: { control: "boolean" },
    variant: {
      control: "select",
      options: ["primary", "secondary", "ghost", "error"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

const commonOptions = [
  { value: "burger", label: "Burger" },
  { value: "fries", label: "Fries" },
  { value: "drink", label: "Drink" },
];

export const Default: Story = {
  args: {
    options: commonOptions,
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    options: commonOptions,
    variant: "secondary",
  },
};

export const Ghost: Story = {
  args: {
    options: commonOptions,
    variant: "ghost",
  },
};

export const Error: Story = {
  args: {
    options: commonOptions,
    variant: "error",
  },
};
