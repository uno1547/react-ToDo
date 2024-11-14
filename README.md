# 개요
- 처음 공부한 react로 간단한 ToDoList 제작
- 할일 추가, 조회, 수정, 삭제 간단기능 구현
- react사용, db는 firebase의 firestore 사용
  - 홈화면(할일X)
<img width="1393" alt="스크린샷 2024-11-14 오후 8 35 49" src="https://github.com/user-attachments/assets/9729f852-c044-489f-9fff-e90fd32a50f8">
  - 홈화면(할일O)
<img width="1392" alt="스크린샷 2024-11-14 오후 8 38 02" src="https://github.com/user-attachments/assets/ce4b5b2b-af55-43f1-a656-032df40a5d0e">
  - 모달창
<img width="1394" alt="스크린샷 2024-11-14 오후 8 38 18" src="https://github.com/user-attachments/assets/60e5f2ac-1138-4482-a91e-5d7a987e55ec">
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
### App컴포넌트
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
- 할일입력창(input)에 입력된 toDo값으로 submit > db에 반영 > 다시불러오고(아마 toDos변경) ToDos컴포넌트 rerender
- fetchToDo함수로 데이터 불러온후, loading state 변경 > 문구사라짐

### ToDo컴포넌트
- 2개의 state
  - modalOpen(불값에 따라 수정모달창 open)
  - done(체크박스, 텍스트 클릭에 따른 done state로 실행여부 변경 및 해당 ToDo컴포넌트 rerender)
- ToDos로부터 props 받아서 각 ToDo컴포넌트표시
- ToDo컴포넌트의 'edit'버튼 > modalOpen state변경 > 모달창 open
- ToDo컴포넌트의 'delete'버튼 > props로 받은 fetchTodo함수 > 해당데이터삭제 > ToDos의 state 변경 rerender
- ToDo컴포넌트별로 modalOpen state 에따라 자식 Modal창 표시

### Modal컴포넌트
- Modal컴포넌트의 'edit' > db에 반영 > ToDos의 state 변경 rerender

## 이슈
- ToDos의 input값에 입력하는과정에서 ToDo state가 바뀌면서 ToDo들도 다시생기는듯?
- 마찬가지로 Modal컴포넌트에서 input에 입력하면 content state 바뀌면서 Modal계속 다시생기는건가?
- useEffect 의 dependency배열어디에 씀?
- setModal, fetchTodo 처럼 상위 컴포넌트의 state 바꾸는 함수를 자식에 전달해서 저렇게 써도되는건가?
