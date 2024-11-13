import { useState } from "react";

import Modal from "./Modal";
import style from "./ToDo.module.css"

import {updateTodo, toggleTodo} from "../utils/updateTodo";
import deleteTodo from "../utils/deleteTodo";

function ToDo({ id, text, isDone , fetchTodo}) {
  console.log('ToDo li 컴포넌트!');
  const [modalOpen, setModalOpen] = useState(false)
  const [done, setDone] = useState(isDone)

  const handler = () => {
    toggleTodo(id, done)
    setDone(!done) //얘는 ToDo의 done자체로 혼자만 rerender ?실행여부만 바뀌는거라 ToDos전체가 다시 조회될필요는 없나? ToDo만 
  }

  const modalHandler = () => {
    setModalOpen(prev => !prev)
  }

  const deleteHandler = () => {
    deleteTodo(id)
    fetchTodo() // 삭제 > 전체 ToDos리스트 다시 조회되야함
  }
  return (
    <>
      <li className = {style.todo}>
        <input type = "checkbox" checked = {done} onChange = {handler}></input>
        <span onClick={handler}>{text}</span>
        <div>
          <button onClick={modalHandler}>Edit</button>
          <button onClick={deleteHandler}>Delete</button>
        </div>
      </li>
      {modalOpen ? <Modal setModal={modalHandler} todo = {text} updateTodo = {updateTodo} id={id} fetchTodo ={fetchTodo}/> : null}
    </>
  )
}

export default ToDo;