import { useState } from "react";
import style from "./ToDo.module.css"

function ToDo({ text, isDone }) {
  return (
    <>
      <li className = {style.todo}>
        <input type = "checkbox" defaultChecked={isDone}></input>
        <span>{text}</span>
        <div>
          <button>수정</button>
          <button>휴지통</button>
        </div>
      </li>
    </>
  )
}

export default ToDo;