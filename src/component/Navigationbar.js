import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import styled from "@emotion/styled";
import { useTheme, withStyles } from "@mui/material/styles";
import Dropdown from "./Element/Dropdown";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";
const pages = [
  { heading: "Men", subHeading: ["T-shirt", "Shirt"] },
  { heading: "Women", subHeading: ["T-shirt", "Shirt"] },
  { heading: "Girl", subHeading: ["T-shirt", "Shirt"] },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const NavBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  boxShadow: "0px 0px 0px",
}));
const WhiteTextTypography = styled(Typography)(({ theme }) => ({
  mr: 2,
  display: { xs: "flex", md: "none" },
  flexGrow: 1,
  fontFamily: "monospace",
  fontWeight: 700,
  letterSpacing: ".3rem",

  textDecoration: "none",
  color: theme.palette.primary.main,
}));
const WhiteTextTypographyMobile = styled(Typography)(({ theme }) => ({
  mr: 2,

  fontFamily: "monospace",
  fontWeight: 700,
  letterSpacing: ".3rem",
  textDecoration: "none",
  color: theme.palette.primary.main,
}));

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const theme = useTheme();
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <NavBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <WhiteTextTypography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            LOGO
          </WhiteTextTypography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <Typography sx={{ mx: 5 }}>Home</Typography>
              {pages.map((page, index) => (
                <MenuItem key={index} onClick={handleCloseNavMenu}>
                  <Box sx={{ display: "flex" }}>
                    <Dropdown Data={page} />
                  </Box>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <WhiteTextTypographyMobile
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",

              textDecoration: "none",
              color: theme.palette.primary.main,
            }}
          >
            LOGO
          </WhiteTextTypographyMobile>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", justifyContent: "center" },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography sx={{ mx: 5 }}>Home</Typography>
            </Box>
            {pages.map((page, index) => (
              <Box sx={{ display: "flex", alignItems: "center", mx: 5 }}>
                <Dropdown Data={page} />
              </Box>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Badge badgeContent={1} sx={{ mr: 4 }} color="primary">
                <ShoppingCartIcon sx={{ mr: 2 }} />
              </Badge>
              <SearchIcon sx={{ ml: 2 }} />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </NavBar>
  );
}
export default ResponsiveAppBar;
