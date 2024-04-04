import { Input } from "@/components/ui/input";

export const inputSize = () => {
  return (
    <Input
      type="number"
      placeholder="Set page size"
      name="sizeInput"
      className="remove-arrow"
    />
  );
};
