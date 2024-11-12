import { useState } from "react";

import ToDos from "./components/ToDos";
import Date from "./components/Date";
import Modal from "./components/Modal";
// import Test from "./components/Test";

import style from "./App.module.css";


function App() {
  // console.log('App 컴포넌트!');
  return (
    <div className={style.inner}>
      <Date />
      <ToDos />
    </div>
  )
}

export default App;
