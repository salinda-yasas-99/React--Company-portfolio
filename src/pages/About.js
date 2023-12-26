import { Grid, Typography } from "@mui/material";
import React from "react";
import ComOverview from "../components/Home components/ComOverview";
import aboutImg from "../assets/images/about.svg";
import Leadership from "../components/Home components/Leadership";
import ComHistory from "../components/Home components/ComHistory";
import OurTeam from "../components/Home components/OurTeam";

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
        padding: "4%",
        minHeight: { xl: "90vh", lg: "100vh", md: "100vh" },
      }}
    >
      <Typography style={{ color: "#024481" }} variant="h2">
        About Us
      </Typography>
      <h3 style={{ fontSize: "20px", marginTop: 10 }}>
        We provide software services in prototyping, specifying, building and
        integrating high tech, next-generation software solutions.
      </h3>
      <img
        src={aboutImg}
        style={{
          width: "auto",
          height: "auto",
          maxHeight: "800px",
          paddingTop: "2%",
          paddingBottom: "2%",
        }}
      />
      <section id="abt_sec_1">
        <ComOverview />
      </section>
      <section id="abt_sec_2">
        <Leadership />
      </section>
      <section id="abt_sec_3">
        <OurTeam />
      </section>
      <section id="abt_sec_4">
        <ComHistory />
      </section>
    </Grid>
  );
}

export default About;
