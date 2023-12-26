import { Grid } from "@mui/material";
import React from "react";

function Contact() {
  return (
    <Grid
      className="Contact"
      sx={{
        marginTop: "80px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "red",
      }}
    >
      <p>This is Contact us</p>
    </Grid>
  );
}

export default Contact;
