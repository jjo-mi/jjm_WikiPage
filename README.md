## WikiPage 과제

### 기술 스택
- React.js
- MUI 라이브러리 사용

### 기능 구현 목록
1. API 없이 로컬스토리지를 활용한 문서 저장
2. 문서는 저장, 읽기, 수정 기능이 있음
3. 저장된 문서는 사이드바에서 확인이 가능
4. 사이드바 클릭시 해당 본문 상세내용 보여주기
5. 상세내용 보기에선 수정이 가능함
6. 사이드바의 내용은 5개까지만 보여지며, 그이상일 경우 다음 페이지로 넘어가짐

### 핵심 로직
- 저장과 읽기, 수정에 대한 상태관리를 중앙에서 처리하여 다른 컴포넌트에 전달하여 조건부 렌더링
- 저장은 로컬스트로지에 내용 보관