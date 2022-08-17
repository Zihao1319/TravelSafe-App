import React, { useState, useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDisplay from "./AccordionDisplay";
import { extractObj } from "../utils/utils";

const DisplayInfo = (data) => {
  // getting the data from area access restriction nested object
  const info = data.data.areaAccessRestriction;
  const vaccineInfo = info.travelVaccination["qualifiedVaccines"];
  // console.log(extractObj(vaccineInfo, ["supportedVaccineProducts"]));

  // console.log(findNestedObj(info.entry, ["lastUpdate", "ban", "text"]));

  const entryData = extractObj(info.entry, [
    "lastUpdate",
    "ban",
    "text",
    "referenceLink",
  ]);

  // console.log(entryData);

  const travelTestData = extractObj(info.travelTest, [
    "lastUpdate",
    "isRequired",
    "referenceLink",
  ]);

  const travelQuarantineData = extractObj(info.travelQuarantineModality, [
    "lastUpdate",
    "text",
    "duration",
    "referenceLink",
  ]);

  const vaccineData = extractObj(info.travelVaccination, [
    "lastUpdate",
    "isRequired",
    "referenceLink",
  ]);

  console.log(vaccineData);

  const declarationDocumentsData = extractObj(info.declarationDocuments, [
    "lastUpdate",
    "isRequired",
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
    "lastUpdate",
    "isRequired",
    "applicationGuidance",
    "obtentionMethods",
    "referenceLink",
  ]);

  const exitData = extractObj(info.exit, [
    "lastUpdate",
    "isBanned",
    "text",
    "specialRequirements",
    "referenceLink",
  ]);

  //   console.log(test);
  //   console.log(exitData);

  let dataObj = {
    "Entry Requirement": entryData,
    "Travel Test Requirements": travelTestData,
    "Travel Quarantine Requirements": travelQuarantineData,
    "Approved vaccines": vaccineData,
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
