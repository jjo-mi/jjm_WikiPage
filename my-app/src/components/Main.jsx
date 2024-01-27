// Main.js
import React, { useState, useEffect } from "react";
import { Container, TextField, Button, Box, Typography } from "@mui/material";

export default function Main({
  selectedDocument,
  setSelectedDocument,
  newDocument,
  setNewDocument,
  isEditing,
  setIsEditing,
  documents,
  setDocuments,
}) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editingContent, setEditingContent] = useState("");
  const [editingTitle, setEditingTitle] = useState("");

  // console.log("선택된 값확인중", selectedDocument);
  useEffect(() => {
    const storedContent = localStorage.getItem("content");
    if (storedContent) {
      setContent(storedContent);
    }
  }, []);

  const handleSave = () => {
    const id = new Date().getTime();

    const newDocumentObj = { id, title, content };

    setDocuments((prevDocuments) => [...prevDocuments, newDocumentObj]);
    localStorage.setItem(
      "documents",
      JSON.stringify([...documents, newDocumentObj])
    );

    // 입력 필드 초기화
    setTitle("");
    setContent("");
    setNewDocument(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleUpdate = () => {
    // 업데이트된 내용으로 기존 문서를 수정
    setDocuments((prevDocuments) =>
      prevDocuments.map((doc) =>
        doc.id === selectedDocument.id
          ? {
              ...doc,
              title: editingTitle || doc.title,
              content: editingContent || doc.content,
            }
          : doc
      )
    );

    // 로컬 스토리지 업데이트
    localStorage.setItem(
      "documents",
      JSON.stringify(
        documents.map((doc) =>
          doc.id === selectedDocument.id
            ? {
                ...doc,
                title: editingTitle || doc.title,
                content: editingContent || doc.content,
              }
            : doc
        )
      )
    );

    // 편집 상태 초기화
    setSelectedDocument(null);
    setEditingContent("");
    setEditingTitle("");
    setIsEditing(false);
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        flex: 1,
      }}
    >
      <Box
        sx={{
          paddingLeft: "100px",
          "@media (min-width: 800px)": {
            flexDirection: "row",
            alignItems: "center",
          },
        }}
      >
        <Box display="flex" justifyContent="flex-end" mb={1} mt={4}>
          {selectedDocument && !isEditing && (
            <Button variant="contained" color="primary" onClick={handleEdit}>
              수정
            </Button>
          )}
          {isEditing && (
            <Button variant="contained" color="primary" onClick={handleUpdate}>
              적용
            </Button>
          )}
          {newDocument && (
            <Button variant="contained" color="primary" onClick={handleSave}>
              저장
            </Button>
          )}
        </Box>

        {selectedDocument && !isEditing && (
          // 선택한 문서의 내용 표시
          <>
            <Typography variant="h4" mb={3}>
              {selectedDocument.title}
            </Typography>
            <Typography variant="body1" mb={2}>
              {selectedDocument.content}
            </Typography>
          </>
        )}

        {isEditing && (
          // 선택한 문서 수정
          <>
            <TextField
              label="Title"
              value={editingTitle || selectedDocument.title}
              onChange={(e) => setEditingTitle(e.target.value)}
              multiline
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <TextField
              label="Content"
              value={editingContent || selectedDocument.content}
              onChange={(e) => setEditingContent(e.target.value)}
              multiline
              rows={10}
              fullWidth
              margin="normal"
              variant="outlined"
            />
          </>
        )}
        {newDocument && (
          // 새로운 문서 작성 시의 입력 필드
          <>
            <TextField
              label="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              multiline
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <TextField
              label="Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              multiline
              rows={10}
              fullWidth
              margin="normal"
              variant="outlined"
            />
          </>
        )}
      </Box>
    </Container>
  );
}
