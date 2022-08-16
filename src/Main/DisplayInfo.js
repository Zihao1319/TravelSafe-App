import React, { useState, useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDisplay from "./AccordionDisplay";
import { extractObj, renameKey } from "../utils/utils";

const newKeys = {
  ban: "BAN",
  text: "TEXT",
  lastUpdate: "LAST",
  referenceLink: "LINK",
};

const DisplayInfo = (data) => {
  //getting the area access restriction data
  const info = data.data.areaAccessRestriction;

  const entryData = extractObj(info.entry, [
    "ban",
    "text",
    "lastUpdate",
    "referenceLink",
  ]);

  //   console.log(entryData);

  const travelTestData = extractObj(info.travelTest, [
    "isRequired",
    "lastUpdate",
    "referenceLink",
  ]);

  const travelQuarantineData = extractObj(info.travelQuarantineModality, [
    "text",
    "duration",
    "lastUpdate",
    "referenceLink",
  ]);
  const declarationDocumentsData = extractObj(info.declarationDocuments, [
    "isRequired",
    "lastUpdate",
    "healthDocumentationLink",
  ]);
  const masksData = extractObj(info.masks, [
    "isRequired",
    "description",
    "referenceLink",
  ]);
  const tracingApplicationData = extractObj(info.tracingApplication, [
    "isRequired",
    "text",
    "iosUrl",
    "androidUrl",
  ]);
  const areaHealthPassData = extractObj(info.areaHealthPass, [
    "isRequired",
    "applicationGuidance",
    "obtentionMethods",
    "referenceLink",
    "lastUpdate",
  ]);
  const exitData = extractObj(info.exit, [
    "isBanned",
    "text",
    "specialRequirements",
    "referenceLink",
    "lastUpdate",
  ]);

  //   console.log(test);
  //   console.log(exitData);

  let dataObj = {
    "Entry Requirement": entryData,
    "Travel Test Requirements": travelTestData,
    "Travel Quarantine Requirements": travelQuarantineData,
    "Health Declaration Documents": declarationDocumentsData,
    "Mask Wearing Requirement": masksData,
    "Tracing Application Info": tracingApplicationData,
    "Area Health Pass Info": areaHealthPassData,
    "Exit Requirement": exitData,
  };

  //   console.log(dataObj);

  const infoHeaders = Object.keys(dataObj);
  //   console.log(infoHeaders);

  return (
    <>
      {infoHeaders.map((header, i) => {
        const subTableData = dataObj[`${header}`];
        // console.log(subTableData);
        // console.log(Object.values(info))
        return (
          <div key={i}>
            <AccordionDisplay title={header} data={subTableData} />
          </div>
        );
      })}
    </>
  );
};

export default DisplayInfo;
