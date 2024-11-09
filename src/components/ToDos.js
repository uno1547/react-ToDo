import { useState, useEffect } from "react";
import style from "./ToDos.module.css";
import ToDo from "./ToDo";

function ToDos({ setModal }) {
  const [toDo, setToDo] = useState() // 
  // const [cnt, setCnt] = useState(0)
  const [toDos, setToDos] = useState([
    // 데이터의 id는 고유하게 정해진다고 가정!! 이건 별도로 처리가 필요할듯함 global에 index를 주거나, 데이터 생성시에 고유값을 설정하던가
    { id : "첫번째", text : "첫번째", isDone : false},
    { id : "두번째", text : "두번째", isDone : false},
    { id : "세번째", text : "세번째", isDone : true}
  ])
  // console.log(modalHandler);
  const changeHandler = (evt) => {
    // console.log(evt.target);
    setToDo({id : evt.target.value, text : evt.target.value, isDone : false}) // 이때 state가 변하긴하지만 아래 콘솔이찍히고 나서야 랜더링이 다시되기때문에 콘솔에선 변한 state를 볼수없는것??
    // console.log(toDo); // state를 찍는것은 볼수없다?
  }

  const submitHandler = (evt) => {
    // console.log('submit');
    evt.preventDefault()
    if(!toDo) return
    // console.log([toDo, ...toDos]);
    // setToDos(prev => [toDo, ...toDos]) // shift
    setToDos(prev => [...prev, toDo]) // push
  }
  // console.log(toDos);
  console.log('todos 랜더링!!'); // toDo가 바뀔때마다 랜더링이 다시된다!!
  return (
    <div className={style.todos}>
      <form className={style.form} onSubmit={submitHandler}>
        <input placeholder="할일을 입력하세요" onChange={changeHandler}></input>
        <button type="submit">추가</button>
      </form>
      <ul>
        {toDos.map((todo, idx) => {
          // console.log(`${todo.text}${todo.isDone}${idx}`);
          // return <ToDo text={todo.text} isDone={todo.isDone} key={todo.id} setModal = {setModal}/>
          return <ToDo text={todo.text} isDone={todo.isDone} key={todo.id}/>
          // return <ToDo text={todo.text} isDone={todo.isDone} key={todo.text}/>
        })}
        {
        }
      </ul>   
    </div>
  )
}

export default ToDos;