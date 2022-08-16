import React, { useState, useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionSubTable from "./AccordionSubTable";
import { extractObj, renameKey } from "../utils/utils";

const newKeys = {
  ban: "BAN",
  text: "TEXT",
  lastUpdate: "LAST",
  referenceLink: "LINK",
};

const AccordionDisplay = (props) => {
  console.log(props.data);
  const data = renameKey(props.data, newKeys);
  console.log(data);
  const title = props.title;
  // console.log(data.lastUpdate);

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
          <Typography sx={{ width: "33%", flexShrink: 0 }}>{title}</Typography>
          <Typography sx={{ color: "text.secondary" }}>
            Last Update:{" "}
            {data["lastUpdate"] ? data["lastUpdate"] : "Not available"}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {data.map((data, i) => {
            // console.log(data["lastUpdate"]);
            return (
              <div key={i}>
                <AccordionSubTable data={data} />
              </div>
            );
          })}
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default AccordionDisplay;
