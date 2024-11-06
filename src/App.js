import style from "./App.module.css";

import ToDos from "./components/ToDos";
import Date from "./components/Date";
import Test from "./components/Test";

function App() {
  return (
    <div className={style.inner}>
      <Date />
      <ToDos />
      {/* <Test /> */}
    </div>
  )
}

export default App;
