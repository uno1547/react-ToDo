import style from "./Modal.module.css"

function Modal({ setModal }) {
  const submitHandler = (evt) => {
    console.log('submit');
    evt.preventDefault()
  }
  const modalHandler = () => {
    setModal(prev => !prev)
  }
  return (
    <div className={style.modal_container}>
      <div className={style.modal}>
        <div className={style.modal_header}>
          <p className={style.close} onClick={modalHandler}>&times;</p>
        </div>
        <form className={style.modal_content} id="update-form" onSubmit={submitHandler}>
          <input placeholder="수정사항을 입력하세요" />
        </form>
        <div className={style.modal_footer}>
          <button type="submit" form="update-form" className = {`${style.btn} ${style.btn_submit}`}>수정</button>
          <button className = {`${style.btn} ${style.btn_cancel}`}>취소</button>
        </div>
      </div>
    </div>
  )
}

export default Modal