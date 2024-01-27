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

export default function Sidebar({ documents, setSelectedDocument }) {
  const handleDocumentClick = (document) => {
    console.log("ch", document);
    setSelectedDocument(document);
  };

  // const handleNewDocumentClick = () => {
  //   // 기본적으로 title과 content가 필요한 새 문서 생성
  //   const newDocument = { title: "새 문서", content: "" };
  //   setSelectedDocument(newDocument);
  // };

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{ width: "30%", flexShrink: 0, height: "100%" }}
    >
      <Box>
        <Typography
          variant="h4"
          sx={{
            // border: "1px solid #efef", // 테두리 스타일
            padding: "10px", // 내부 여백
            fontWeight: "bold", // 폰트 두껍게
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // 그림자 추가
          }}
        >
          WikiPage 문서
        </Typography>
      </Box>
      <List>
        <ListItemButton
          // button
          onClick={() => setSelectedDocument(null)}
          // sx={{ borderButtom }}
        >
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText primary="새 문서 작성" />
        </ListItemButton>
        <Divider />
        {documents.map((doc) => (
          <ListItemButton key={doc.id} onClick={() => handleDocumentClick(doc)}>
            <ListItemText primary={doc.title} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
}
