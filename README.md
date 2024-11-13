# 개요
- 처음 공부한 react로 간단한 ToDoList 제작
- 할일 추가, 조회, 수정, 삭제 간단기능 구현
- react사용, db는 firebase의 firestore 사용

# 실행방법
- react에 필요한 파일다운
```
npx create-react-app
```

- firestore 파일다운
```
npm install firebase
```
- 각 디렉터리(public, src) 파일 알맞게 배치

# 구성
- index.js
- App.js
- components
  - Date.js
  - ToDos.js
  - ToDo.js
  - Modal.js
- utils(데이터처리함수, firebase)
  - firebase.js
  - getTodo.js
  - createTodo.js
  - updateTodo.js
  - deleteTodo.js

## 컴포넌트 구조?
App 
- Date(현재날짜표시)
- ToDos(할일목록표시)
    - ToDo(각 할일)
        - Modal(할일에 대한 수정모달창)
    - ToDo
        - Modal
    - ...

### ToDos컴포넌트
- 3개의 state
  - toDo (input값에 사용자가 입력한 input값)
  - toDos (DB에서 불러온 전체 할 일 목록 배열)
  - loading (로딩상태 불값, 이에따라 로딩문구표시)
- ToDos 불러오고 map 해서 ToDo컴포넌트 리스트 생성
- 할일입력창(input)에 입력된 toDo값으로 submit > db에 반영 > 다시불러오고(아마 toDos변경) rerender

### ToDo컴포넌트
- 2개의 state
  - modalOpen(불값에 따라 수정모달창 open)
  - done(체크박스, 텍스트 클릭에 따른 실행여부)
- ToDos로부터 props 받아서 각 ToDo컴포넌트표시
- ToDo컴포넌트의 '수정'버튼 > done state로 실행여부 변경 및 리랜더?
  'delete'버튼 > props로 받은 fetchTodo함수 삭제시 ToDos의 state fetch해줌
- ToDo컴포넌트별로 modalOpen state 에따라 자식 Modal창 표시

### Modal컴포넌트
- Modal컴포넌트의 submit > db에 반영 > 다시불러오기(toDos) rerender
