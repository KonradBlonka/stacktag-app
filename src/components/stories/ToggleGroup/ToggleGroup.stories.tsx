import { Meta, StoryObj } from "@storybook/react";
import { ToggleGroupButtons } from "../ToggleGroup/ToggleGroup";

interface ToggleGroupProps {
  type: "single" | "multiple";
  className?: string;
  defaultValue?: string;
}

const meta: Meta<typeof ToggleGroupButtons> = {
  title: "Components/ToggleGroup",
  component: ToggleGroupButtons,
  parameters: {
    layout: "centered",
  },
};
export default meta;

type Story = StoryObj<ToggleGroupProps>;

export const Triple: Story = {
  args: {
    type: "single",
    className: "bg-black p-2 data-[state=on]:text-black text-white rounded-md",
    defaultValue: "name",
  },
};
