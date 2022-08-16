import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const AccordionSubTable = (props) => {
  const header = Object.keys(props.data);
  const content = Object.values(props.data);

  return (
    <TableContainer>
      <Table>
        <TableRow>
          <TableCell variant="head">{header}</TableCell>
          <TableCell>{content}</TableCell>
        </TableRow>
      </Table>
    </TableContainer>
  );
};

export default AccordionSubTable;
