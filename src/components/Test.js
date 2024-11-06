import { useState } from "react";

function Test() {
  const [state, setState] = useState(0);
  return (
    <>
      <div>{state}</div>
    </>
  )
}

export default Test