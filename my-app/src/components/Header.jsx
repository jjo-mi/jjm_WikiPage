import React from "react";

import { AppBar, Typography, Toolbar } from "@mui/material";
import { FilePresentIcon, AccountCircleIcon } from "@mui/icons-material";

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Logo</Typography>
      </Toolbar>
    </AppBar>
  );
}
