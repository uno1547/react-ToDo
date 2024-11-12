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
