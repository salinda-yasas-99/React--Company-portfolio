import { Grid, Typography } from "@mui/material";
import features_1 from "../../assets/images/features-1.svg";
import features_2 from "../../assets/images/features-2.svg";
import features_3 from "../../assets/images/features-3.svg";
import features_4 from "../../assets/images/features-4.svg";
import CardHome from "../Card";
import { Padding } from "@mui/icons-material";

const homeCards = [
  {
    title: "Software Development",
    content:
      "Crafting robust and scalable software solutions tailored to your business needs.",
  },
  {
    title: "Mobile Application Development",
    content:
      "Building cutting-edge mobile apps that bring your ideas to life on any device.",
  },
  {
    title: "Web Application Development",
    content:
      "Creating responsive and feature-rich web applications for a seamless online experience.",
  },
  {
    title: "UI/UX Design",
    content:
      "Designing intuitive and visually stunning user interfaces to enhance user satisfaction.",
  },
];

const Services = () => {
  return (
    <div
      className="features"
      style={{
        backgroundColor: "#d8ebf9",
        backgroundRepeat: "no-repeat",
        minHeight: "90vh",
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent={"center"}
        alignItems="center"
        pt={10}
        pl={5}
        pb={5}
      >
        <Typography style={{ color: "#024481" }} variant="h2">
          What We Do?
        </Typography>
      </Grid>

      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Grid
          container
          direction={"column"}
          justify={"center"}
          alignItems={"center"}
          item
          lg={12}
          md={12}
          sm={12}
          xs={12}
          sx={{ height: "50px" }}
        />
        <Grid
          sx={{ pb: { md: 10, sm: 10, xs: 10 } }}
          container
          item
          direction="column"
          justify={"center"}
          alignItems={"center"}
          lg={3}
          md={6}
          sm={12}
        >
          <CardHome
            V1={homeCards[0].title}
            V2={homeCards[0].content}
            img={features_1}
          />
        </Grid>

        <Grid
          sx={{ pb: { md: 10, sm: 10, xs: 10 } }}
          container
          item
          direction="column"
          justify={"center"}
          alignItems={"center"}
          lg={3}
          md={6}
          sm={12}
        >
          <CardHome
            V1={homeCards[1].title}
            V2={homeCards[1].content}
            img={features_2}
          />
        </Grid>

        <Grid
          sx={{ pb: { md: 10, sm: 10, xs: 10 } }}
          container
          item
          direction="column"
          justify={"center"}
          alignItems={"center"}
          lg={3}
          md={6}
          sm={12}
        >
          <CardHome
            V1={homeCards[2].title}
            V2={homeCards[2].content}
            img={features_3}
          />
        </Grid>

        <Grid
          sx={{ pb: { md: 10, sm: 10, xs: 10 } }}
          container
          item
          direction="column"
          justify={"center"}
          alignItems={"center"}
          lg={3}
          md={6}
          sm={12}
        >
          <CardHome
            V1={homeCards[3].title}
            V2={homeCards[3].content}
            img={features_4}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Services;
