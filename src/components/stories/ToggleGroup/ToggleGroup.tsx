import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useState } from "react";

export const ToggleGroupButtons = () => {
  const [offButton, setOffButton] = useState("name");

  const nameSort = () => {
    setOffButton("name");
  };
  const popularSort = () => {
    setOffButton("popular");
  };
  const activitySort = () => {
    setOffButton("activity");
  };
  return (
    <ToggleGroup
      type="single"
      className="bg-black p-2 data-[state=on]:text-black text-white rounded-md"
      defaultValue="name"
    >
      <ToggleGroupItem
        value="name"
        className="border-white border-2"
        disabled={offButton === "name"}
        onClick={nameSort}
      >
        Name
      </ToggleGroupItem>

      <ToggleGroupItem
        value="popular"
        className="border-white border-2"
        disabled={offButton === "popular"}
        onClick={popularSort}
      >
        Popular
      </ToggleGroupItem>
      <ToggleGroupItem
        value="new"
        className="border-white border-2"
        disabled={offButton === "activity"}
        onClick={activitySort}
      >
        New
      </ToggleGroupItem>
    </ToggleGroup>
  );
};
