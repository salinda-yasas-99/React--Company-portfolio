import { Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <div
      className="footer"
      style={{
        backgroundColor: "#5395cc",
        backgroundRepeat: "no-repeat",
        marginBottom: "-10px",
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
      >
        {/*Column 1 */}
        <Grid
          container
          direction="column"
          justify={"center"}
          alignItems={"center"}
          item
          lg={4}
          md={12}
          sm={12}
          xs={12}
        >
          {/* | <Box
            sx={{
              width: {
                xl: "20vw",
                lg: "20vw",
                md: "40vw",
                sm: "50vw",
                xs: "60vw",
              },
              borderRadius: 5,
              padding: 3,
            }}
          >
            <img src={logoWhite} alt={"logo white"}></img> 
          </Box> */}
          <Typography style={{ color: "#ffffff" }} variant="h5">
            About us
          </Typography>
          <Typography style={{ color: "#ffffff" }} variant="h6">
            we innovate ideas
          </Typography>
          <ul
            className="social icons"
            style={{
              display: "flex",
              justifyContent: "space-between",
              listStyleType: "none",
              paddingRight: "40px",
            }}
          >
            <li style={{ width: "30%", textAlign: "center", color: "#ffffff" }}>
              <FacebookIcon />
            </li>
            <li style={{ width: "30%", textAlign: "center", color: "#ffffff" }}>
              <InstagramIcon />
            </li>
            <li style={{ width: "30%", textAlign: "center", color: "#ffffff" }}>
              <LinkedInIcon />
            </li>
            <li style={{ width: "30%", textAlign: "center", color: "#ffffff" }}>
              <TwitterIcon />
            </li>
          </ul>
        </Grid>

        {/*Column 2.*/}
        <Grid
          container
          direction="column"
          justify={"center"}
          alignItems={"center"}
          item
          lg={4}
          md={12}
          sm={12}
          xs={12}
        >
          <Typography variant={"h5"} style={{ color: "#ffffff" }}>
            Useful links
          </Typography>
          <HashLink smooth to={"/#sec_1"} style={{ textDecoration: "none" }}>
            <Button variant={"text"}>
              <Typography variant={"h6"} style={{ color: "#ffffff" }}>
                Home
              </Typography>
            </Button>
          </HashLink>
          <HashLink smooth to={"/#sec_2"} style={{ textDecoration: "none" }}>
            <Button variant={"text"}>
              <Typography variant={"h6"} style={{ color: "#ffffff" }}>
                What We Do
              </Typography>
            </Button>
          </HashLink>
          <HashLink smooth to={"/About"} style={{ textDecoration: "none" }}>
            <Button variant={"text"}>
              <Typography variant={"h6"} style={{ color: "#ffffff" }}>
                About Us
              </Typography>
            </Button>
          </HashLink>
        </Grid>

        {/*Column 3.*/}
        <Grid
          container
          direction="column"
          justify={"center4"}
          alignItems={"center"}
          item
          lg={4}
          md={12}
          sm={12}
          xs={12}
        >
          <Typography variant={"h6"} style={{ color: "#ffffff" }}>
            Contact with us
          </Typography>
          <Typography variant={"h6"} style={{ color: "#ffffff" }}>
            <DraftsOutlinedIcon />
            Innov8Fusion@gmail.com
          </Typography>

          <Typography variant={"h6"} style={{ color: "#ffffff" }}>
            <LocalPhoneIcon />
            +9400-000-0000
          </Typography>
          <Typography variant={"h6"} style={{ color: "#ffffff" }}>
            <PlaceIcon />
            96/8A 1/2,
            <br /> Old Kesbawa Road,
            <br /> Kottanuwatta Road,
            <br /> Nugegoda
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent={"center"}
        style={{ backgroundColor: "#024481", padding: "15px" }}
      >
        <Typography style={{ textAlign: "center", color: "#ffffff" }}>
          Copyright INNOV8 FUSION © 2023. All rights reserved.
        </Typography>
      </Grid>
    </div>
  );
};

export default Footer;
