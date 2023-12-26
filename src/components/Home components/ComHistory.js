import { Grid } from "@mui/material";
import React from "react";

function ComHistory() {
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
        Company History
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
    </Grid>
  );
}

export default ComHistory;
