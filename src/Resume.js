import React from "react";
import { Box, Paper } from "@material-ui/core";

function Resume() {
  return (
    <Box
      style={{
        height: "100%",
        width: "100%",
        flex: "1 1 auto",
        overflow: "hidden",
      }}
      component={Paper}
    >
      {/* <Container maxWidth="lg" square style={{ height: "100%" }}> */}
      <iframe
        src="https://drive.google.com/file/d/1ig00K4Z2UZuKEdqiLP0rJycDkpNRNLzK/preview"
        width="100%"
        height="100%"
        flex="1 1 auto"
        title="Résumé (PDF)"
      ></iframe>
      {/* </Container> */}
    </Box>
  );
}

export default Resume;
