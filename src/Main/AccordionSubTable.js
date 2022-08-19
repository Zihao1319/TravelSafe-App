import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import parse from "html-react-parser";

const AccordionSubTable = (props) => {
  const header = Object.keys(props.data);
  const data = Object.values(props.data);
  // console.log(data);

  return (
    <TableContainer>
      <Table>
        <TableRow>
          <TableCell variant="head">{header}</TableCell>
          <TableCell>
            {data.map((info) => {
              // console.log(header, info, typeof info);
              const isArray = Array.isArray(info);
              // console.log(isArray, info);

              if (isArray) {
                info.forEach((subInfo) => {
                  // console.log(subInfo, typeof subInfo);
                  return (
                    <div>
                      {/* {console.log(subInfo)}
                      {subInfo} */}
                      {/* {typeof subInfo === "string" ? parse(subInfo) : subInfo} */}
                    </div>
                  );
                });
              } else if (!isArray) {
                return (
                 
                  <div> 
                  {/* {console.log(info)} */}
                  {typeof info === "string" ? parse(info) : info}
                  </div>
                );
              }
            })}

            {/* {typeof content === "string" ? parse(content) : content} */}
          </TableCell>
        </TableRow>
      </Table>
    </TableContainer>
  );
};

export default AccordionSubTable;
