import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CustomizedMenus from "./menu";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const aboutUsItems = [
    "Company Overview",
    "Leadership Team",
    "Our Team",
    "Company History",
  ];

  const handleAction = (value) => {
    if (value === "Home") {
      navigate("/");
    }

    if (value === "Careers") {
      navigate("/Careers");
    }

    if (value === "Blog") {
      navigate("/Blogs");
    }
    if (value === "About") {
      navigate("/About");
    }
    if (value === "Contact Us") {
      navigate("/Contact");
    }
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        INNOV8 FUSION
      </Typography>
      <Divider />
      {/* <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}


      </List> */}
      <List>
        <ListItem disablePadding>
          <ListItemButton
            sx={{ textAlign: "center" }}
            onClick={() => handleAction("Home")}
          >
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <CustomizedMenus menuName={"About"} menuItems={aboutUsItems} />
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            sx={{ textAlign: "center" }}
            onClick={() => handleAction("Careers")}
          >
            <ListItemText primary="Careers" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            sx={{ textAlign: "center" }}
            onClick={() => handleAction("Blog")}
          >
            <ListItemText primary="Blog" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            sx={{ textAlign: "center" }}
            onClick={() => handleAction("Contact Us")}
          >
            <ListItemText primary="Contact Us" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const navigate = useNavigate();

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav" sx={{ backgroundColor: "#ffffff" }}>
        <Toolbar sx={{ marginLeft: "4%", marginRight: "4%" }}>
          <IconButton
            color="transparent"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              color: "#448bc8",
              fontWeight: "bold",
            }}
          >
            INNOV8 FUSION
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" }, display: "flex" }}>
            <Button sx={{ color: "#000" }} onClick={() => handleAction("Home")}>
              Home
            </Button>

            <span>
              <CustomizedMenus menuName={"About"} menuItems={aboutUsItems} />
            </span>

            <Button
              sx={{ color: "#000" }}
              onClick={() => handleAction("Careers")}
            >
              Careers
            </Button>
            <Button sx={{ color: "#000" }} onClick={() => handleAction("Blog")}>
              Blog
            </Button>
            <Button
              sx={{ color: "#000" }}
              onClick={() => handleAction("Contact Us")}
            >
              Contact
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
