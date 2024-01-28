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
        "대법원과 각급법원의 조직은 법률로 정한다. 국무총리는 대통령을 보좌하며, 행정에 관하여 대통령의 명을 받아 행정각부를 통할한다. 대통령은 법률에서 구체적으로 범위를 정하여 위임받은 사항과 법률을 집행하기 위하여 필요한 사항에 관하여 대통령령을 발할 수 있다. 공공필요에 의한 재산권의 수용·사용 또는 제한 및 그에 대한 보상은 법률로써 하되, 정당한 보상을 지급하여야 한다. 지방의회의 조직·권한·의원선거와 지방자치단체의 장의 선임방법 기타 지방자치단체의 조직과 운영에 관한 사항은 법률로 정한다. 헌법재판소는 법관의 자격을 가진 9인의 재판관으로 구성하며, 재판관은 대통령이 임명한다.\n국민의 모든 자유와 권리는 국가안전보장·질서유지 또는 공공복리를 위하여 필요한 경우에 한하여 법률로써 제한할 수 있으며, 제한하는 경우에도 자유와 권리의 본질적인 내용을 침해할 수 없다. 모든 국민은 통신의 비밀을 침해받지 아니한다. 국민경제자문회의의 조직·직무범위 기타 필요한 사항은 법률로 정한다. 군인은 현역을 면한 후가 아니면 국무위원으로 임명될 수 없다. 대법관의 임기는 6년으로 하며, 법률이 정하는 바에 의하여 연임할 수 있다. 대통령은 법률이 정하는 바에 의하여 사면·감형 또는 복권을 명할 수 있다. 국회는 선전포고, 국군의 외국에의 파견 또는 외국군대의 대한민국 영역안에서의 주류에 대한 동의권을 가진다.",
    },
    {
      id: 3,
      title:
        "문서 3 : 외국인은 국제법과 조약이 정하는 바에 의하여 그 지위가 보장된다.",
      content:
        "국가는 농·어민과 중소기업의 자조조직을 육성하여야 하며, 그 자율적 활동과 발전을 보장한다. 선거에 있어서 최고득표자가 2인 이상인 때에는 국회의 재적의원 과반수가 출석한 공개회의에서 다수표를 얻은 자를 당선자로 한다.일반사면을 명하려면 국회의 동의를 얻어야 한다. 국무회의는 대통령·국무총리와 15인 이상 30인 이하의 국무위원으로 구성한다. 국가는 농수산물의 수급균형과 유통구조의 개선에 노력하여 가격안정을 도모함으로써 농·어민의 이익을 보호한다.",
    },
    {
      id: 4,
      title: "문서 4",
      content:
        "국가는 농·어민과 중소기업의 자조조직을 육성하여야 하며, 그 자율적 활동과 발전을 보장한다. 선거에 있어서 최고득표자가 2인 이상인 때에는 국회의 재적의원 과반수가 출석한 공개회의에서 다수표를 얻은 자를 당선자로 한다.일반사면을 명하려면 국회의 동의를 얻어야 한다. 국무회의는 대통령·국무총리와 15인 이상 30인 이하의 국무위원으로 구성한다. 국가는 농수산물의 수급균형과 유통구조의 개선에 노력하여 가격안정을 도모함으로써 농·어민의 이익을 보호한다.",
    },
    {
      id: 5,
      title:
        "문서 5 : 국회의원은 국가이익을 우선하여 양심에 따라 직무를 행한다. ",
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
