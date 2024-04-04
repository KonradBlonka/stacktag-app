import { FC } from "react";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "./ui/table";

interface TableListTagProps {
  children: React.ReactNode;
}

const TableListTag: FC<TableListTagProps> = ({ children }) => {
  return (
    <Table className="bg-white">
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Count</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>{children}</TableBody>
    </Table>
  );
};

export default TableListTag;
export type { TableListTagProps };
