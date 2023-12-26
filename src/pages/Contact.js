import { Grid, Typography } from "@mui/material";
import React from "react";

function Contact() {
  return (
    <Grid
      className="About"
      sx={{
        marginTop: "80px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#e1f7f7",
        padding: "4%",
        minHeight: { xl: "90vh", lg: "100vh", md: "100vh" },
      }}
    >
      <Typography style={{ color: "#024481" }} variant="h2">
        CONTACT US
      </Typography>
      <h3 style={{ fontSize: "20px", marginTop: 10 }}>
        We provide software services in prototyping, specifying, building and
        integrating high tech, next-generation software solutions
      </h3>
    </Grid>
  );
}

export default Contact;
