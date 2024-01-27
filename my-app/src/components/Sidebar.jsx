import React, { useState } from "react";
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
  Pagination,
} from "@mui/material";

import SendIcon from "@mui/icons-material/Send";

const ITEMS_PER_PAGE = 5;

export default function Sidebar({
  documents,
  setNewDocument,
  setSelectedDocument,
  setIsEditing,
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(documents.length / ITEMS_PER_PAGE);

  const handleDocumentClick = (document) => {
    setSelectedDocument(document);
    setIsEditing(false);
    setNewDocument(false);
  };

  const renderDocumentsForPage = () => {
    const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIdx = startIdx + ITEMS_PER_PAGE;
    return documents.slice(startIdx, endIdx);
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
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
      <List
        sx={{
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          width: "100%",
        }}
      >
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
        {renderDocumentsForPage().map((doc) => (
          <ListItemButton key={doc.id} onClick={() => handleDocumentClick(doc)}>
            <ListItemText primary={doc.title} />
          </ListItemButton>
        ))}
      </List>
      <Box mt="auto" ml={1} pb={2}>
        <Typography variant="body2">
          페이지: {currentPage} / {totalPages}
        </Typography>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
        />
      </Box>
    </Drawer>
  );
}
