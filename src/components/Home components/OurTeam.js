import React from "react";
import { Avatar, Grid, Stack } from "@mui/material";

function OurTeam() {
  return (
    <Grid
      className="Leadership"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: { xl: "80vh", lg: "80vh", md: "80vh" },
      }}
    >
      <h1 style={{ color: "#024481", padding: "5%", fontSize: "50px" }}>
        Our Team
      </h1>
      <Stack direction="row" spacing={20} sx={{ marinTop: "10%" }}>
        <div>
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ height: "200px", width: "200px" }}
          />
          <h2 style={{ paddingLeft: "40px" }}>Mr. Sarath</h2>
        </div>
        <div>
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ height: "200px", width: "200px" }}
          />
          <h2 style={{ paddingLeft: "40px" }}>Mr. Sarath</h2>
        </div>
        <div>
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ height: "200px", width: "200px" }}
          />
          <h2 style={{ paddingLeft: "40px" }}>Mr. Sarath</h2>
        </div>
        <div>
          <Avatar
            alt="Travis Howard"
            src="/static/images/avatar/2.jpg"
            sx={{ height: "200px", width: "200px" }}
          />
          <h2 style={{ paddingLeft: "40px" }}>Mr. Sarath</h2>
        </div>
      </Stack>
    </Grid>
  );
}

export default OurTeam;
