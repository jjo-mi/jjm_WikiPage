import "./App.css";
import React, { useState } from "react";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import { Box, Grid } from "@mui/material";

function App() {
  const [newDocument, setNewDocument] = useState("");
  const [documents, setDocuments] = useState([]);

  const handleNewDocument = () => {
    setDocuments([...documents, newDocument]);
    setNewDocument("");
  };
  return (
    // <Box id="root">
    <Grid container style={{ width: "100%", height: "100%", bgcolor: "Pink" }}>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={2}>
        {/* <div style={{ display: "flex", marginTop: "70px" }}> */}
        <Sidebar documents={documents} />
      </Grid>
      <Grid item xs={10}>
        <Main
          newDocument={newDocument}
          setNewDocument={setNewDocument}
          documents={documents}
          handleNewDocument={handleNewDocument}
          setDocuments={setDocuments}
        />
        {/* </div> */}
      </Grid>

      {/* </Box> */}
    </Grid>
  );
}

export default App;
