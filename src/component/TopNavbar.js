import React, { useState } from "react";
import {
  Stack,
  Badge,
  AppBar,
  Toolbar,
  styled,
  Typography,
  InputBase,
  Avatar,
  Box,
  Menu,
  MenuItem,
  Container,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { Mail, Notifications, Pets } from "@mui/icons-material";

const StyleToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});
const TextBox = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    fontSize: 12,
  },
}));
const Icons = styled("div")(({ theme }) => ({
   gap: "20px",
  alignItems: "center",
  display: "flex",
}));
const Navbar = () => {
  const theme = useTheme();
  console.log(theme, "theme**");

  return (
    <AppBar bgcolor="lightblue" position="sticky">
      <Container maxWidth="xl">
        <StyleToolbar>
          <TextBox variant="subtitle1"> Alba Helpline: 04829 222776</TextBox>
          <Icons>
            <TextBox variant="subtitle1">Register</TextBox>
            <TextBox variant="subtitle1">Login</TextBox>
          </Icons>
        </StyleToolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
