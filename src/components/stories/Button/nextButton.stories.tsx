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

export const Default: Story = {
  args: {
    children: "Next",
  },
};
