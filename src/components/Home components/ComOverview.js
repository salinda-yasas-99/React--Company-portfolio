import { Grid, Typography } from "@mui/material";
import React from "react";

function ComOverview() {
  return (
    <Grid
      className="company-overview"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: { xl: "80vh", lg: "80vh", md: "80vh" },
      }}
    >
      <h1 style={{ color: "#024481", padding: "2%", fontSize: "50px" }}>
        Company Overview
      </h1>
      <h3
        style={{
          paddingLeft: "10%",
          paddingRight: "10%",
          textIndent: "10em",
          textAlign: "center",
          padding: "2%",
        }}
      >
        Since our establishment in 2023, we've been at the forefront of
        technology, dedicated to pioneering innovative solutions. Our relentless
        pursuit of cutting-edge advancements enables us to craft transformative
        experiences and drive unparalleled efficiency for businesses across
        diverse industries. Join us as we redefine the future.
      </h3>
      <h3
        style={{
          paddingLeft: "10%",
          paddingRight: "10%",
          textIndent: "10em",
          textAlign: "center",
          padding: "2%",
        }}
      >
        With an unwavering commitment to innovation, we consistently push
        boundaries, exploring new horizons and redefining what's possible. Our
        team comprises visionary minds driven by a collective passion for
        driving change and revolutionizing the technological landscape. We pride
        ourselves on cultivating an environment that fosters creativity and
        encourages bold ideas, propelling us toward groundbreaking solutions.
      </h3>
      <h3
        style={{
          paddingLeft: "10%",
          paddingRight: "10%",
          textIndent: "10em",
          textAlign: "center",
          padding: "2%",
        }}
      >
        At the heart of our mission lies a dedication to empowering businesses,
        providing them with the tools to thrive in a rapidly evolving digital
        world. We believe in not just meeting but exceeding expectations,
        leveraging state-of-the-art technologies to deliver unparalleled
        results. Our solutions are not just about the present; they're about
        envisioning and creating a future where possibilities are limitless and
        potential is realized.
      </h3>
    </Grid>
  );
}

export default ComOverview;
