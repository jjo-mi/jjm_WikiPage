import React from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography,
} from "@mui/material";

import SendIcon from "@mui/icons-material/Send";

export default function Sidebar({
  documents,
  setNewDocument,
  setSelectedDocument,
  setIsEditing,
}) {
  const handleDocumentClick = (document) => {
    setSelectedDocument(document);
    setIsEditing(false);
    setNewDocument(false);
  };

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        "& .MuiDrawer-paper": {
          width: "250px",
          overflowX: "hidden",
        },
        height: "100%",
      }}
    >
      <Box>
        <Typography
          variant="h4"
          sx={{
            padding: "10px",
            fontWeight: "bold",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          WikiPage 문서
        </Typography>
      </Box>
      <List>
        <ListItemButton onClick={() => setSelectedDocument(null)}>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText
            primary="새 문서 작성"
            onClick={() => setNewDocument(true)}
          />
        </ListItemButton>
        <Divider />
        {documents.map((doc) => (
          <ListItemButton
            key={doc.id}
            onClick={() => handleDocumentClick(doc)}
            sx={{
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              width: "100%",
            }}
          >
            <ListItemText primary={doc.title} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
}
