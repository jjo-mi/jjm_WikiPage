import "./App.css";
import React, { useState, useEffect } from "react";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import { Box, Grid } from "@mui/material";

function App() {
  const [newDocument, setNewDocument] = useState(false);
  const [documents, setDocuments] = useState([]);
  const [selectedDocument, setSelectedDocument] = useState();
  const [isEditing, setIsEditing] = useState(false);

  // const handleNewDocument = () => {
  //   setDocuments([...documents, newDocument]);
  //   setNewDocument("");
  // };

  useEffect(() => {
    const storedContent = localStorage.getItem("documents");
    if (storedContent) {
      setDocuments(JSON.parse(storedContent));
    }
    console.log("초기", documents);
  }, []);

  return (
    // <Box id="root">
    <Grid container style={{ width: "100%", height: "100%", bgcolor: "Pink" }}>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={2}>
        {/* <div style={{ display: "flex", marginTop: "70px" }}> */}
        <Sidebar
          documents={documents}
          setNewDocument={setNewDocument}
          setSelectedDocument={setSelectedDocument}
          setIsEditing={setIsEditing}
        />
      </Grid>
      <Grid item xs={10}>
        <Main
          selectedDocument={selectedDocument}
          newDocument={newDocument}
          setNewDocument={setNewDocument}
          setIsEditing={setIsEditing}
          isEditing={isEditing}
          documents={documents}
          // handleNewDocument={handleNewDocument}
          setDocuments={setDocuments}
        />
        {/* </div> */}
      </Grid>

      {/* </Box> */}
    </Grid>
  );
}

export default App;
