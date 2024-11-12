import style from "./Date.module.css";

function DateComponent() {
  // console.log('date 컴포넌트!');
  const date = new Date()
  const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  const weekDays = [ 'SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
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