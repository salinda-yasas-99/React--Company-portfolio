import { Grid, Typography } from "@mui/material";
import React from "react";
import ComOverview from "../components/Home components/ComOverview";

function About() {
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
        minHeight: { xl: "80vh", lg: "80vh", md: "80vh" },
      }}
    >
      <Typography style={{ color: "#024481" }} variant="h2">
        About Us
      </Typography>
      <h3 style={{ fontSize: "20px", marginTop: 10 }}>
        We provide software services in prototyping, specifying, building and
        integrating high tech, next-generation software solutions.
      </h3>
      <ComOverview />
    </Grid>
  );
}

export default About;
