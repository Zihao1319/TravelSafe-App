import React, { useState, useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionSubTable from "./AccordionSubTable";

const AccordionDisplay = (props) => {
  const extractedData = props.extractedData;
  const header = props.data;
  // console.log(extractedData.lastUpdate);
  // console.log(extractedData["lastUpdate"]);

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1"
          id="panel1"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>{header}</Typography>
          <Typography sx={{ color: "text.secondary" }}>
            Last Update:{" "}
            {extractedData.lastUpdate
              ? extractedData.lastUpdate
              : "Not available"}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <AccordionSubTable></AccordionSubTable>
          {/* <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography> */}
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default AccordionDisplay;