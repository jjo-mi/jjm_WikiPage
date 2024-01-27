import React from "react";

import {
  AppBar,
  Typography,
  Container,
  Box,
  Toolbar,
  IconButton,
  Button,
  InputBase,
  Badge,
  MenuItem,
  Menu,
} from "@mui/material";
import { FilePresentIcon, AccountCircleIcon } from "@mui/icons-material";

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        {/* <IconButton edge="start" color="inherit" aria-label="menu">
          <FilePresentIcon />
        </IconButton> */}
        <Typography variant="h6">Logo</Typography>
        {/* <IconButton color="inherit">
          <AccountCircleIcon />
        </IconButton> */}
      </Toolbar>
    </AppBar>
  );
}
