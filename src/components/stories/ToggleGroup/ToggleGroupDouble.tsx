import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { GalleryVertical, TableProperties } from "lucide-react";
import { useState } from "react";

export const ToggleGroupDoubleButtons = () => {
  const [offButton, setOffButton] = useState("list");

  const listSort = () => {
    setOffButton("list");
  };
  const pageSort = () => {
    setOffButton("page");
  };
  return (
    <ToggleGroup
      type="single"
      className="bg-black p-2 data-[state=on]:text-black text-white rounded-md"
      defaultValue="false"
    >
      <ToggleGroupItem
        value="pageContent"
        className="border-white border-2"
        disabled={offButton === "list"}
        onClick={listSort}
      >
        <div className="w-15 flex justify-center align-middle items-center">
          List
          <TableProperties className="ml-3" size={15} strokeWidth={3} />
        </div>
      </ToggleGroupItem>
      <ToggleGroupItem
        value="listContent"
        className="border-white border-2"
        disabled={offButton === "page"}
        onClick={pageSort}
      >
        <div className="w-15 flex justify-center align-middle items-center">
          Cards
          <GalleryVertical className="ml-1" size={15} strokeWidth={3} />
        </div>
      </ToggleGroupItem>
    </ToggleGroup>
  );
};
