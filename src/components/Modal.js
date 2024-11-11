import { useState } from "react";
import style from "./Modal.module.css"

function Modal({id, setModal, todo, updateTodo, fetchTodo }) {
  const [content, setContent] = useState(todo)

  const submitHandler = (evt) => {
    console.log('submit');
    console.log(content);
    evt.preventDefault()
    updateTodo(id, content)
    setModal()
    fetchTodo()
  }
  // const modalHandler = () => {
  //   setModal(prev => !prev)
  // }
  const changeHandler = (evt) => {
    setContent(evt.target.value)
    console.log(evt.target.value);
  }
  return (
    <div className={style.modal_container}>
      <div className={style.modal}>
        <div className={style.modal_header}>
          <p className={style.close} onClick={setModal}>&times;</p>
        </div>
        <form className={style.modal_content} id="update-form" onSubmit={submitHandler}>
          <input placeholder="수정사항을 입력하세요" value={content} onChange={changeHandler}/>
        </form>
        <div className={style.modal_footer}>
          <button type="submit" form="update-form" className = {`${style.btn} ${style.btn_submit}`}>수정</button>
          <button className = {`${style.btn} ${style.btn_cancel}`} onClick = {setModal}>취소</button>
        </div>
      </div>
    </div>
  )
}

export default Modal