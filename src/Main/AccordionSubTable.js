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
  console.log(header, data, content, typeof content);
  // const test = `<p>Authorities have reopened its borders to all fully vaccinated international arrivals from all countries and suspended the many entry schemes for travellers from specific countries, including the Air, Land and Sea Vaccinated Travel Lanes (VTL), as well as the Reciprocal Green Lane (RGL) and Air Travel Pass (ATP), from 1 April. Effective 26 April, fully vaccinated travellers from all countries are allowed entry without testing and quarantine requirements.</p> <p>All long-term pass holders including those with Long-Term Visit Pass (LTVP), In-Principle Approval (IPA), Student’s Pass (STP) and Work Pass, <strong>have to be fully vaccinated</strong> to enter Singapore.</p> <p>Inbound travellers who are <strong>short-term pass holders</strong> who are unvaccinated or partially vaccinated must apply for an entry exemption <a href="https://form.gov.sg/#!/62302595ef39ee0012eed03b" target="_blank" rel="noopener">here</a>.</p> <p>Inbound travellers holding <strong>long-term passes issued by Ministry of Manpower</strong> aged 18 and above who are medically ineligible for vaccines must apply for an entry exemption <a href="https://form.gov.sg/#!/610b4fe79eba440012bddce5" target="_blank" rel="noopener">here</a>.</p> <p>Fully vaccinated long-term pass holders including those with Long-Term Visit Pass (LTVP), In-Principle Approval (IPA), Student’s Pass (STP), excluding Work Permit Holders and minors aged 12 and under, are not required an entry approval to enter the country from 22 February. Other long-term pass holders and immediate relatives of Singapore Citizens/PR holders must get <a href="https://form.gov.sg/#!/62418f45d0df080013bd3cc2" target="_blank" rel="noopener">entry approval</a> from the Immigration and Checkpoints Authority (ICA) prior to making travel plans.</p> <p><strong>Land Borders with Malaysia</strong></p> <p>Fully vaccinated travellers or those unvaccinated aged 12 and under are allowed to travel through the Causeway and Second Link land border checkpoints without quarantine or testing requirements. The checkpoints are operating around the clock and all modes of travel, including public and private transport, are permitted without daily quota restrictions. Inbound travellers to Singapore must have valid documents and apply for the SG Arrival card within three days prior to departure. Those entering via a private vehicle must apply for a <a href="https://onemotoring.lta.gov.sg/content/onemotoring/home.html" target="_blank" rel="noopener">Vehicle Entry Permit</a>.</p> <p>Singaporean citizens, permanent residents and long-term pass holders who are fully vaccinated are no longer required to apply for the SG Arrival Card to enter the country via its land border checkpoints. Those who received their vaccination in Singapore must have their records reflected in the TraceTogether or HealthHub applications, while others must submit their vaccination record to the Ministry of Health upon their first entry. All other travellers are still required to apply for the card.</p> <p>Regular public transport services to and from Malaysia's Johor Bahru have resumed. SBS Transit's 160, 170 and 170X, SMRT Buses' 950, Transtar Travel's TS1, TS3, TS6 and TS8 and Causeway Link's CW1, CW2, CW5 and CW7 are among the resumed lines.</p>`;
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
