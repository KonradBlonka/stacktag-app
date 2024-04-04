import { Meta, StoryObj } from "@storybook/react";
import { inputSize } from "./InputSize";

interface inputSizeProps {
  type: "number";
  placeholder: string;
  name: string;
  className: "remove-arrow";
}

const meta: Meta<typeof inputSize> = {
  title: "Components/Input",
  component: inputSize,
  parameters: {
    layout: "centered",
  },
};
export default meta;

type Story = StoryObj<inputSizeProps>;

export const InputSize: Story = {
  args: {
    type: "number",
    placeholder: "Set page size",
    name: "sizeInput",
    className: "remove-arrow",
  },
};
