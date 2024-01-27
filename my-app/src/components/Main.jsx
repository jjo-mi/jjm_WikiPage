// Main.js
import React, { useState, useEffect } from "react";
import { Container, TextField, Button, Box, Typography } from "@mui/material";

export default function Main({
  selectedDocument,
  setSelectedDocument,
  documents,
  setDocuments,
}) {
  const [content, setContent] = useState("");
  const [editingContent, setEditingContent] = useState("");

  useEffect(() => {
    const storedContent = localStorage.getItem("content");
    if (storedContent) {
      setContent(storedContent);
    }
  }, []);

  const handleSave = () => {
    const id = new Date().getTime();
    const newDocumentObj = { id, title: `Document ${id}`, content };

    setDocuments((prevDocuments) => [...prevDocuments, newDocumentObj]);
    localStorage.setItem(
      "documents",
      JSON.stringify([...documents, newDocumentObj])
    );

    // 입력 필드 초기화
    setContent("");
  };

  const handleEdit = () => {
    setEditingContent(selectedDocument.content);
  };

  const handleUpdate = () => {
    // 업데이트된 내용으로 기존 문서를 수정
    setDocuments((prevDocuments) =>
      prevDocuments.map((doc) =>
        doc.id === selectedDocument.id
          ? { ...doc, content: editingContent }
          : doc
      )
    );

    // 로컬 스토리지 업데이트
    localStorage.setItem(
      "documents",
      JSON.stringify(
        documents.map((doc) =>
          doc.id === selectedDocument.id
            ? { ...doc, content: editingContent }
            : doc
        )
      )
    );

    // 편집 상태 초기화
    setSelectedDocument(null);
    setEditingContent("");
  };

  return (
    <Container maxWidth="lg" sx={{ flex: 1 }}>
      <Box display="flex" justifyContent="flex-end" mb={1} mt={4}>
        {selectedDocument ? (
          <Button variant="contained" color="primary" onClick={handleUpdate}>
            수정
          </Button>
        ) : (
          <Button variant="contained" color="primary" onClick={handleSave}>
            저장
          </Button>
        )}
        {selectedDocument && (
          <Button variant="contained" color="primary" onClick={handleEdit}>
            편집
          </Button>
        )}
      </Box>

      {selectedDocument ? (
        // 선택한 문서의 내용 표시
        <>
          <Typography variant="h4" mb={2}>
            {selectedDocument.title}
          </Typography>
          <TextField
            label="Content"
            value={editingContent}
            onChange={(e) => setEditingContent(e.target.value)}
            multiline
            rows={10}
            fullWidth
            margin="normal"
            variant="outlined"
          />
        </>
      ) : (
        // 새로운 문서 작성 시의 입력 필드
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
      )}
    </Container>
  );
}
