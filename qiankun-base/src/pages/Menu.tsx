import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";

export default function SimpleAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="sub_app_01"
          id="sub_app_01"
        >
          <Typography>sub_react_01</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Link to="/sub_react_01">sub_react_01</Link>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="sub-app-02"
          id="sub-app-02"
        >
          <Typography>sub-app-02</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Link to="/sub_react_02">sub_react_02</Link>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
