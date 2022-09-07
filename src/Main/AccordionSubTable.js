import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import parse from "html-react-parser";
import Typography from "@mui/material/Typography";

const AccordionSubTable = (props) => {
  const header = Object.keys(props.data);
  const data = Object.values(props.data);
  // console.log(data);

  return (
    <TableContainer>
      <Table>
        <TableRow>
          <TableCell variant="head" sx={{ width: "30%" }}>
            <Typography
              variant="overline"
              align="left"
              sx={{ color: "#3A5D9C" }}
            >
              {header}
            </Typography>
          </TableCell>
          <TableCell variant="body" sx={{ width: "70%" }}>
            <Typography variant="body2">
              {data.map((info) => {
                const isArray = Array.isArray(info);
                // console.log(header, info, isArray);

                if (isArray) {
                  for (let i = 0; i < info.length; i++) {
                    // console.log(header, info[i], info.length);
                    return <p key={i}>{parse(info[i])}</p>;
                  }

                  // return <>{parse(info[0])}</>;
                  // info.forEach((subInfo) => {
                  //   return (
                  //     <div>
                  //       <ul>
                  //         <li>{parse(subInfo)}</li>
                  //       </ul>
                  //       {typeof subInfo === "string" ? parse(subInfo) : subInfo}
                  //     </div>
                  //   );
                  // });
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
            </Typography>
          </TableCell>
        </TableRow>
      </Table>
    </TableContainer>
  );
};

export default AccordionSubTable;
