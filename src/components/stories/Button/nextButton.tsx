import { Button } from "@/components/ui/button";
import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps } from "react";

const buttonNextStyles = cva([
  "text-white",
  "w-full",
  "rounded-md",
  "disabled:cursor-not-allowed",
]);
type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof buttonNextStyles>;

export const nextButton = ({ ...props }: ButtonProps) => {
  return <Button {...props} />;
};
