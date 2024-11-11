import { useState, useEffect } from "react";
import style from "./ToDos.module.css";
import ToDo from "./ToDo";
import getTodo from "../utils/getTodo";
import createTodo from "../utils/createTodo";

function ToDos() {
  const [toDo, setToDo] = useState("")
  const [toDos, setToDos] = useState([])
  console.log('ToDos생성!');

  const fetchTodo = async () => {
    const response = await getTodo()
    setToDos(prev => [...response])
  }
  
  useEffect(() => {
      fetchTodo()
  }, [])
    
  console.log(toDos);
  const changeHandler = (evt) => {
    setToDo(evt.target.value) // 이때 state가 변하긴하지만 아래 콘솔이찍히고 나서야 랜더링이 다시되기때문에 콘솔에선 변한 state를 볼수없는것??
  }

  const submitHandler = (evt) => {
    evt.preventDefault()
    if(!toDo) return
    console.log(toDo);
    createTodo(toDo)
    fetchTodo() //여기서 갱신된 데이터 한번 더 불러와서 리랜더링이 일어날듯??
    setToDo("") // 입력창 초기화
    // setToDos(prev => [toDo, ...toDos]) // shift
    // setToDos(prev => [...prev, toDo]) // push
  }

  return (
    <div className={style.todos}>
      <form className={style.form} onSubmit={submitHandler}>
        <input placeholder="할일을 입력하세요" onChange={changeHandler} value={toDo}></input>
        <button type="submit">추가</button>
      </form>
      <ul>
        {toDos.map((todo) => {
          // console.log(`${todo.text}${todo.isDone}${idx}`);
          // return <ToDo text={todo.text} isDone={todo.isDone} key={todo.id} setModal = {setModal}/>
          return <ToDo text={todo.text} isDone={todo.isDone} key={todo.id} id = {todo.id} fetchTodo ={fetchTodo}/>
          // return <ToDo text={todo.text} isDone={todo.isDone} key={todo.text}/>
        })}
      </ul>   
    </div>
  )
}

export default ToDos;