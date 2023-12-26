import { Grid } from "@mui/material";
import React from "react";

function Blog() {
  return (
    <Grid
      className="Blog"
      sx={{
        marginTop: "80px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "red",
      }}
    >
      <p>This is bLOG</p>
    </Grid>
  );
}

export default Blog;
