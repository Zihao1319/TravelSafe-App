import React, { useState, useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionSubTable from "./AccordionSubTable";
import { renameKey } from "../utils/utils";

const newKeys = {
  ban: "Ban",
  isBanned: "Ban",
  specialRequirements: "Special requirements",
  text: "Description",
  lastUpdate: "Last update",
  referenceLink: "More info (link)",
  isRequired: "Required by authorities",
  duration: "Days of quarantine",
  healthDocumentationLink: "More info (link)",
  iosUrl: "iOS Download link",
  androidUrl: "Android Download link",
  applicationGuidance: "Application guidance",
  obtentionMethods: "Method of attainment",
};

const AccordionDisplay = (props) => {
  // console.log(props.data);
  const data = renameKey(props.data, newKeys);
  const title = props.title;
  const lastUpdate = data[0]["Last update"]
    ? data[0]["Last update"]
    : "Not Available";

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
            {/* Last Update: {lastUpdate} */}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {data.map((data, i) => {
            // console.log(data, typeof data);
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
