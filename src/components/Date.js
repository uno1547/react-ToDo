import style from "./Date.module.css";
import { useState } from "react";

function DateComponent() {
  // const [date, setDate] = useState(new Date()); // 사실 state가 필요한 이유가없지않나 setDate쓰지도않으면
  const date = new Date()
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const weekDays = [ 'SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
  // console.log('date 컴포넌트 랜더링!!');
  return (
    <div className = {style.date_area}>
      <div className = {style.date_main}>
        <span className= {style.bold}>{String(date.getDate()).padStart(2, '0')}</span>
        <div className= {style.vert}>
          <span>{(months[date.getMonth()])}</span>
          <span>{date.getFullYear()}</span>
        </div>
      </div>
      {/* <h1>ToDoList App</h1> */}
      <div className = {style.date_sub}>
        <span>{weekDays[date.getDay()]}</span>
        <span>@</span>
      </div>
    </div>
  )
}

export default DateComponent;