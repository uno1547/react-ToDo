import { useState } from "react";

import ToDos from "./components/ToDos";
import Date from "./components/Date";
import Modal from "./components/Modal";
// import Test from "./components/Test";
import style from "./App.module.css";

import getTodo from "./utils/getTodo";
/*
const toDosDatas = await getTodo()
console.log(toDosDatas);
*/

function App() {
  // console.log('App 컴포넌트 랜더링!');
  // addData()
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
