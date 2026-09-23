import { useState } from "react";
import "./App.css";

function App() {
  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);
  const [operation, setOperation] = useState<string>("");

  return (
    <>
      <h1>Egyszerű számológép</h1>
      <input type="number" onChange={(e) => setNum1(Number(e.target.value))}></input>
      <select onChange={(e) => setOperation(e.target.value)}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input type="number" onChange={(e) => setSzam2(Number(e.target.value))}></input>

      <button>Számolás</button>

      <span>
        {num1} {operation} {num2} =
      </span>
    </>
  );
}

export default App;
