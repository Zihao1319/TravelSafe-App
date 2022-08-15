import React, { useState, useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDisplay from "./AccordionDisplay";
import extractObj from "../utils/utils";

const DisplayInfo = (data) => {
  const info = data.data.areaAccessRestriction;
  const test = extractObj(info.areaHealthPass, ["isRequired", "lastUpdate"]);
  //   console.log(test);
  //   console.log(info);

  const infoHeaders = Object.keys(info);
  //   console.log(infoHeaders);

  return (
    <>
      {infoHeaders.map((header, i) => {
        // console.log(info, header);
        const extractedData = info[`${header}`];
        // console.log(info[`${header}`]);
        // console.log(Object.values(info))
        return (
          <div key={i}>
            <AccordionDisplay data={header} extractedData={extractedData} />
          </div>
        );
      })}
      /*
    </>
  );
};

export default DisplayInfo;
