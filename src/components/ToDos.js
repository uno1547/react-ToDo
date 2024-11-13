import { useState, useEffect } from "react";

import ToDo from "./ToDo";
import None from "./None";
import getTodo from "../utils/getTodo";
import createTodo from "../utils/createTodo";

import style from "./ToDos.module.css";

function ToDos() {
  const [toDo, setToDo] = useState("")
  const [toDos, setToDos] = useState([])
  const [loading, setLoading] = useState(true)
  console.log('ToDos 컴포넌트!');

  const fetchTodo = async () => {
    const response = await getTodo()
    setToDos(prev => [...response])
    setLoading(false)
  }
  
  useEffect(() => {
      fetchTodo()
  }, []) // dependency의 역할은 뭐지
  
  const changeHandler = (evt) => {
    setToDo(evt.target.value) // 이때 state가 변하긴하지만 아래 콘솔이찍히고 나서야 랜더링이 다시되기때문에 콘솔에선 변한 state를 볼수없는것??
  }

  const submitHandler = (evt) => {
    evt.preventDefault()
    if(!toDo) return
    // console.log(toDo);
    createTodo(toDo) // 데이터 갱신
    fetchTodo() //여기서 갱신된 데이터 한번 더 불러와서 리랜더링이 일어날듯??
    setToDo("") // 입력창 초기화
  }

  return (
    <div className={style.todos}>
      <form className={style.form} onSubmit={submitHandler}>
        <input placeholder="Enter ToDo" onChange={changeHandler} value={toDo}></input>
        <button type="submit">Add</button>
      </form>
        {loading ? <h2 className={style.center}>Lodading...</h2> : toDos.length == 0 ? <h2 className={style.center}>Nothing to do...</h2> : (
          toDos.map((todo) => {
            return <ToDo text={todo.text} isDone={todo.isDone} key={todo.id} id = {todo.id} fetchTodo ={fetchTodo}/>
          })
        )}

      {/* {
        <ul>
        {toDos.map((todo) => {
          return <ToDo id = {todo.id} text={todo.text} isDone={todo.isDone} key={todo.id}  fetchTodo ={fetchTodo}/>
        })}
      </ul>         
      } */}

    </div>
  )
}

export default ToDos;