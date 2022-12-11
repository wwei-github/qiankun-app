import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <Box id="sub_react_01" sx={{ bgcolor: "#cfe8fc", maxHeight: "88vh" }} />
        <Box id="sub_react_02" sx={{ bgcolor: "#cfe8fc", maxHeight: "88vh" }} />
      </Container>
    </React.Fragment>
  );
}
