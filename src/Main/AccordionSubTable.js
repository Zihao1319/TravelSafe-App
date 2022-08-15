import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const AccordionSubTable = () => {
  return (
    <TableContainer>
      <Table>
        <TableRow>
          <TableCell variant="head">Header</TableCell>
          <TableCell>Info to be filled</TableCell>
        </TableRow>
      </Table>
    </TableContainer>
  );
};

export default AccordionSubTable;
