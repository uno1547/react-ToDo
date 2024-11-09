import { useEffect, useState } from "react";
import style from "./ToDo.module.css"

function ToDo({ text, isDone, setModal }) {
  console.log('todo 랜더링');
  // console.log(text, isDone);
  const [done, setDone] = useState(isDone)
  console.log('새로 랜더링된 state값', done);
  // useEffect(() => {
  //   setDone(isDone)
  // }, [isDone])
  // console.log(`${text}의 props의 isDone`, isDone);
  // console.log(`${text}의 state`, done);
  const handler = (evt) => {
    console.log('evt!!');
    setDone(!done)
    // console.log(evt.currentTarget)
    // setDone(!done)
    /*
    // const checkbox = evt.currentTarget.querySelector("input")
      클릭하면 체크박스가 체크되게 하고, 이후에 데이터 처리
      아니면 데이터 처리 먼저하고 랜더링을 다시하면 저절로 체크되있을지도 이게 맞는듯 반영이 되야하니깐
    */
  }

  const modalHandler = () => {
    setModal(prev => !prev)
  }
  return (
    <>
      <li className = {style.todo}>
        <input type = "checkbox" checked = {done} onChange = {handler}></input>
        <span onClick={handler}>{text}</span>
        <div>
          <button onClick={modalHandler}>수정</button>
          <button>휴지통</button>
        </div>
      </li>
    </>
  )
}

export default ToDo;