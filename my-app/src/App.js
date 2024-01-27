import "./App.css";
import React, { useState, useEffect } from "react";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import { Grid } from "@mui/material";

function App() {
  const BASIC_MEMO = [
    {
      id: 1,
      title: "문서 1 ",
      content:
        "국가는 농·어민과 중소기업의 자조조직을 육성하여야 하며, 그 자율적 활동과 발전을 보장한다. 선거에 있어서 최고득표자가 2인 이상인 때에는 국회의 재적의원 과반수가 출석한 공개회의에서 다수표를 얻은 자를 당선자로 한다.일반사면을 명하려면 국회의 동의를 얻어야 한다. 국무회의는 대통령·국무총리와 15인 이상 30인 이하의 국무위원으로 구성한다. 국가는 농수산물의 수급균형과 유통구조의 개선에 노력하여 가격안정을 도모함으로써 농·어민의 이익을 보호한다.",
    },
    {
      id: 2,
      title: "문서 2 ",
      content:
        "국가는 농·어민과 중소기업의 자조조직을 육성하여야 하며, 그 자율적 활동과 발전을 보장한다. 선거에 있어서 최고득표자가 2인 이상인 때에는 국회의 재적의원 과반수가 출석한 공개회의에서 다수표를 얻은 자를 당선자로 한다.일반사면을 명하려면 국회의 동의를 얻어야 한다. 국무회의는 대통령·국무총리와 15인 이상 30인 이하의 국무위원으로 구성한다. 국가는 농수산물의 수급균형과 유통구조의 개선에 노력하여 가격안정을 도모함으로써 농·어민의 이익을 보호한다.",
    },
    {
      id: 3,
      title: "외국인은 국제법과 조약이 정하는 바에 의하여 그 지위가 보장된다.",
      content:
        "국가는 농·어민과 중소기업의 자조조직을 육성하여야 하며, 그 자율적 활동과 발전을 보장한다. 선거에 있어서 최고득표자가 2인 이상인 때에는 국회의 재적의원 과반수가 출석한 공개회의에서 다수표를 얻은 자를 당선자로 한다.일반사면을 명하려면 국회의 동의를 얻어야 한다. 국무회의는 대통령·국무총리와 15인 이상 30인 이하의 국무위원으로 구성한다. 국가는 농수산물의 수급균형과 유통구조의 개선에 노력하여 가격안정을 도모함으로써 농·어민의 이익을 보호한다.",
    },
    {
      id: 4,
      title: "문서 44444 ",
      content:
        "국가는 농·어민과 중소기업의 자조조직을 육성하여야 하며, 그 자율적 활동과 발전을 보장한다. 선거에 있어서 최고득표자가 2인 이상인 때에는 국회의 재적의원 과반수가 출석한 공개회의에서 다수표를 얻은 자를 당선자로 한다.일반사면을 명하려면 국회의 동의를 얻어야 한다. 국무회의는 대통령·국무총리와 15인 이상 30인 이하의 국무위원으로 구성한다. 국가는 농수산물의 수급균형과 유통구조의 개선에 노력하여 가격안정을 도모함으로써 농·어민의 이익을 보호한다.",
    },
    {
      id: 5,
      title: "국회의원은 국가이익을 우선하여 양심에 따라 직무를 행한다. ",
      content:
        "국가는 농·어민과 중소기업의 자조조직을 육성하여야 하며, 그 자율적 활동과 발전을 보장한다. 선거에 있어서 최고득표자가 2인 이상인 때에는 국회의 재적의원 과반수가 출석한 공개회의에서 다수표를 얻은 자를 당선자로 한다.일반사면을 명하려면 국회의 동의를 얻어야 한다. 국무회의는 대통령·국무총리와 15인 이상 30인 이하의 국무위원으로 구성한다. 국가는 농수산물의 수급균형과 유통구조의 개선에 노력하여 가격안정을 도모함으로써 농·어민의 이익을 보호한다.",
    },
  ];
  const [newDocument, setNewDocument] = useState(false);
  const [documents, setDocuments] = useState([]);
  const [selectedDocument, setSelectedDocument] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const storedContent = localStorage.getItem("documents");
    if (storedContent) {
      setDocuments(JSON.parse(storedContent));
    } else {
      setDocuments(BASIC_MEMO);
      localStorage.setItem("documents", JSON.stringify(BASIC_MEMO));
    }
    // console.log("초기", documents);
  }, []);

  return (
    <Grid container style={{ width: "100%", height: "100%" }}>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={2} sm={2}>
        <Sidebar
          documents={documents}
          setNewDocument={setNewDocument}
          setSelectedDocument={setSelectedDocument}
          setIsEditing={setIsEditing}
        />
      </Grid>
      <Grid item xs={10} sm={10}>
        <Main
          selectedDocument={selectedDocument}
          setSelectedDocument={setSelectedDocument}
          newDocument={newDocument}
          setNewDocument={setNewDocument}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          documents={documents}
          setDocuments={setDocuments}
        />
      </Grid>
    </Grid>
  );
}

export default App;
