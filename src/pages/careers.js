import { Grid } from "@mui/material";
import React from "react";

function careers() {
  return (
    <Grid
      className="careers"
      sx={{
        marginTop: "80px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "red",
      }}
    >
      <p>This is careers</p>
    </Grid>
  );
}

export default careers;
