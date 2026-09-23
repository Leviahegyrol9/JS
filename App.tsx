import { useState } from "react";
import "./App.css";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");

  const handle1 = (event) => {
    setNum1(event.target.value);
  };
  const handle2 = (event) => {
    setNum2(event.target.value);
  };
  const handle3 = (event) => {
    setNum2(event.target.value);
  };

  return (
    <>
      <h1>Egyszerű számológép</h1>
      <input type="number" name="num1" onChange={handle1}></input>
      <select onChange={handle3}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input type="number" name="num2" onChange={handle2}></input>

      <button>Számolás</button>

      <span>
        {num1} {num2} =
      </span>
    </>
  );
}

export default App;
