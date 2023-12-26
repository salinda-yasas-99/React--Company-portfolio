import { Grid } from "@mui/material";
import React from "react";

const Hero = () => {
  return (
    <Grid
      className="HeroPage"
      sx={{
        marginTop: "80px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#e1f7f7",
        width: "auto",
        height: "auto",
        minHeight: { xl: "90vh", lg: "100vh", md: "100vh" },
      }}
    >
      <h1 style={{ fontSize: "80px" }}>
        Hi! We are
        <span style={{ color: "#4c90ca", marginBottom: "0" }}>
          INNOV8 FUSION
        </span>
      </h1>
      <h3 style={{ fontSize: "20px", marginTop: 0 }}>
        we embark on a journey to redefine possibilities through cutting-edge
        solutions.
      </h3>
    </Grid>
  );
};

export default Hero;
