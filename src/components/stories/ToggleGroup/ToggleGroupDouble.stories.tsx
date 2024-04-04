import { Meta, StoryObj } from "@storybook/react";
import { ToggleGroupDoubleButtons } from "./ToggleGroupDouble";

interface ToggleGroupDoubleProps {
  type: "single" | "multiple";
  className?: string;
  defaultValue?: string;
}

const meta: Meta<typeof ToggleGroupDoubleButtons> = {
  title: "Components/ToggleGroupDouble",
  component: ToggleGroupDoubleButtons,
  parameters: {
    layout: "centered",
  },
};
export default meta;

type Story = StoryObj<ToggleGroupDoubleProps>;

export const Double: Story = {
  args: {
    type: "single",
    className: "bg-black p-2 data-[state=on]:text-black text-white rounded-md",
    defaultValue: "name",
  },
};
