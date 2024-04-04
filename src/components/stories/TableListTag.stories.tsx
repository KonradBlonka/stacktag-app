import { Meta, StoryFn } from "@storybook/react";
import TableListTag, { TableListTagProps } from "../TableListTag"; // Assuming the path is correct
import { TableCell, TableRow } from "../ui/table";

export default {
  title: "Components/TableListTag", // Component category in Storybook
  component: TableListTag,
} as Meta;

const Template: StoryFn<TableListTagProps> = (args) => (
  <TableListTag {...args} />
);

export const TableList = Template.bind({});
TableList.args = {
  children: (
    <>
      <TableRow>
        <TableCell>javascript</TableCell>
        <TableCell>123213</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>python</TableCell>
        <TableCell>432112</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>java</TableCell>
        <TableCell>3213432</TableCell>
      </TableRow>
    </>
  ),
};
