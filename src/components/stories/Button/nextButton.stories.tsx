import type { Meta, StoryObj } from "@storybook/react";
import { nextButton } from "..";

const meta: Meta<typeof nextButton> = {
  title: "Components/NextButton",
  component: nextButton,
  parameters: {
    layout: "centered",
  },
  // autodocs for generating docs page
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Link: Story = {
  args: {
    children: "Next",
    variant: "link",
    size: "lg",
  },
};

export const Outline: Story = {
  args: {
    children: "Next",
    variant: "outline",
    size: "lg",
  },
};

export const Default: Story = {
  args: {
    children: "Next",
    variant: "default",
    size: "lg",
  },
};
export const Ghost: Story = {
  args: {
    children: "Next",
    variant: "ghost",
    size: "lg",
  },
};
export const Destructive: Story = {
  args: {
    children: "Next",
    variant: "destructive",
    size: "lg",
  },
};
export const Secondary: Story = {
  args: {
    children: "Next",
    variant: "secondary",
    size: "lg",
  },
};
