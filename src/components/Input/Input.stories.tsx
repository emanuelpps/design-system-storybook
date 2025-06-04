import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  argTypes: {
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
    variant: {
      control: "select",
      options: ["default", "success", "error"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "Escribí algo...",
    variant: "default",
  },
};

export const Success: Story = {
  args: {
    placeholder: "Todo correcto",
    variant: "success",
  },
};

export const Error: Story = {
  args: {
    placeholder: "Hay un error",
    variant: "error",
  },
};
