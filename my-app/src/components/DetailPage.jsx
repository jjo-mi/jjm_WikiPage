import React from "react";
import { Container, TextField, Button, Box, Typography } from "@mui/material";

export default function DetailPage() {
  return (
    <div>
      <Box>
        <Typography variant="h4">{title}</Typography>
        <Typography variant="body1">{content}</Typography>
      </Box>
    </div>
  );
}
