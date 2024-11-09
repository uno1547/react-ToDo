import { useState } from "react";

import ToDos from "./components/ToDos";
import Date from "./components/Date";
import Modal from "./components/Modal";
// import Test from "./components/Test";

import style from "./App.module.css";

function App() {
  console.log('App 컴포넌트 랜더링!');
  // const [modalOpen, setModalOpen] = useState(false)
  return (
    <div className={style.inner}>
      <Date />
      {/* <ToDos setModal = {setModalOpen}/> */}
      <ToDos />
      {/* {modalOpen ? <Modal setModal = {setModalOpen}/> : null} */}
    </div>
  )
}

export default App;
