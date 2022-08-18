import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import parse from "html-react-parser";
import { DataArray } from "@mui/icons-material";

const AccordionSubTable = (props) => {
  const header = Object.keys(props.data);
  const data = Object.values(props.data);
  // console.log(Object.values(data));
  const content = data[0];
  // console.log(typeof content)
  // console.log(header, data, content, typeof content);
  // const test2 = parse(test);

  return (
    <TableContainer>
      <Table>
        <TableRow>
          <TableCell variant="head">{header}</TableCell>
          <TableCell>
            {typeof content === "string" ? parse(content) : content}
          </TableCell>
        </TableRow>
      </Table>
    </TableContainer>
  );
};

export default AccordionSubTable;
