import { useState, useEffect } from "react";
import style from "./ToDos.module.css";
import ToDo from "./ToDo";

function ToDos() {
  const [toDos, setToDos] = useState([
    { text : "할일1", isDone : false},
    { text : "할일2", isDone : false},
    { text : "할일3", isDone : true}
  ])
  console.log('todos 랜더링!!');
  return (
    <div className={style.todos}>
      <form className={style.form}>
        <input placeholder="할일을 입력하세요"></input>
        <button type="submit">추가</button>
      </form>
      <ul>
        {toDos.map((todo, idx) => {
          return <ToDo text={todo.text} isDone={todo.isDone} key={idx}/>
        })}
      </ul>   
    </div>
  )
}

export default ToDos;