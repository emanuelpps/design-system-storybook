import { Button } from "./Button";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      control: "select",
      options: [
        "primary",
        "success",
        "danger",
        "warning",
        "secondary",
        "tertiary",
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Buttons: Story = {
  args: {
    children: "Click me!",
    variant: "primary",
  },
};
