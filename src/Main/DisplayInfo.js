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
  // const parsedData = JSON.parse(data)
  // console.log(parsedData)
  // const data2 = data
  const info = data.data.areaAccessRestriction || "{}";
  console.log(info)
  const vaccineInfo = info.travelVaccination;
  // // const url = convertToUrl ("https://safetravel.ica.gov.sg/arriving/general-travel/fully-vaccinated")
  // console.log(url)
  // const test =  "https://safetravel.ica.gov.sg/arriving/general-travel/fully-vaccinated, https://safetravel.ica.gov.sg/arriving/general-travel/non-fully-vaccinated"
  // console.log(convertToUrl (test))
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

  // console.log(travelTestData);

  const vaccineData = extractObj(info.travelVaccination, [
    "lastUpdate",
    "isRequired",
    "referenceLink",
  ]);

  // console.log(vaccineData);

  const declarationDocumentsData = extractObj(info.declarationDocuments, [
    "lastUpdate",
    "text",
    "description",
    "isRequired",
    "healthDocumentationLink",
    "travelDocumentationLink",
  ]);

  const masksData = extractObj(info.masks, [
    "isRequired",
    "description",
    "text",
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
    // "Vaccination Info": vaccineData,
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
