import { Grid, Typography } from "@mui/material";
import React from "react";
import visionImg from "../../assets/images/vision.svg";
import missionImg from "../../assets/images/mission.svg";

function Vision() {
  return (
    <Grid
      container
      direction="column"
      justifyContent={"center"}
      alignItems="center"
      pt={10}
      pl={5}
      pb={5}
    >
      <Typography style={{ color: "#024481" }} variant="h2">
        Our Vision
      </Typography>
      <h3 style={{ fontSize: "20px", marginTop: 10 }}>
        To be a catalyst for positive change, leveraging technology to propel
        businesses into new realms of success.
      </h3>
      <img
        src={visionImg}
        style={{ width: "auto", height: "auto", maxHeight: "800px" }}
      />
      <Typography style={{ color: "#024481", marginTop: "40px" }} variant="h2">
        Our Mission
      </Typography>
      <h3 style={{ fontSize: "20px", marginTop: 10 }}>
        Provide innovative and tailored solutions that empower businesses to
        thrive in the digital era.
      </h3>
      <img
        src={missionImg}
        style={{ width: "auto", height: "auto", maxHeight: "800px" }}
      />
    </Grid>
  );
}

export default Vision;
