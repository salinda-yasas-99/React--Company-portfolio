import { Button, Grid, TextField } from "@mui/material";
import React from "react";
import contactImg from "../../assets/images/contactUs.svg";
import { Height } from "@mui/icons-material";

function ContactForm() {
  return (
    <Grid
      className="contact-form"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#e1f7f7",
        padding: "4%",
        minHeight: { xl: "90vh", lg: "100vh", md: "100vh" },
      }}
    >
      <h3
        style={{
          fontSize: "40px",
          marginTop: 40,
          backgroundColor: "#ede8fd",
          padding: "20px",
          borderRadius: "20px",
        }}
      >
        Find out how you could power up your business
      </h3>
      <Grid
        container
        direction={"row"}
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Grid container xl={1} lg={1} md={1} sm={1} xs={1} />
        <Grid
          container
          direction={"column"}
          className="form"
          justifyContent="space-evenly"
          xl={4}
          lg={6}
          md={12}
          sm={12}
          xs={12}
        >
          <TextField
            id="fname"
            sx={{ marginBottom: "5%", marginTop: "5%" }}
            label="First Name"
            variant="outlined"
          />
          <TextField
            id="mail"
            sx={{ marginBottom: "5%" }}
            label="E-mail"
            variant="outlined"
          />
          <TextField
            id="lname"
            label="Last Name"
            variant="outlined"
            sx={{ marginBottom: "5%" }}
          />
          <TextField
            id="company"
            label="Company"
            variant="outlined"
            sx={{ marginBottom: "5%" }}
          />
          <TextField
            id="request"
            label="Your Request"
            multiline
            maxRows={4}
            sx={{ marginBottom: "5%" }}
          />
          <Button variant="contained">Send Messege</Button>
        </Grid>
        <Grid
          container
          direction={"column"}
          className="form-image"
          xl={4}
          lg={6}
          md={12}
          sm={12}
          xs={12}
        >
          <img
            src={contactImg}
            style={{ height: "auto", height: "auto", padding: "4%" }}
          />
        </Grid>
        <Grid container xl={1} lg={1} md={1} sm={1} xs={1} />
      </Grid>
    </Grid>
  );
}

export default ContactForm;
