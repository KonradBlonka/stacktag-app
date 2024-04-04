import { Item } from "@/types/interface";
import { FC } from "react";
import { TableCell, TableRow } from "./ui/table";

interface ListTagProps {
  item: Item;
}

const ListTag: FC<ListTagProps> = ({ item }) => {
  return (
    <TableRow>
      <TableCell>{item.name}</TableCell>
      <TableCell>{item.count}</TableCell>
    </TableRow>
  );
};
export default ListTag;
export type { ListTagProps };
