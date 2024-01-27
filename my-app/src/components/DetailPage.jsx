import React from "react";
import { Container, TextField, Button, Box, Typography } from "@mui/material";

export default function DetailPage() {
  return (
    <div>
      <Box>
        <TextField variant="h4">{title}</TextField>
        <TextField variant="body1">{content}</TextField>
      </Box>
    </div>
  );
}
