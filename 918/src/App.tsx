import { useState } from "react";
import "./App.css";

function App() {
  const [szam1, setSzam1] = useState<number>(0);
  const [szam2, setSzam2] = useState<number>(0);

  return (
    <>
      <h1>Hello World</h1>

      <h2>
        {szam1} + {szam2} = {szam1 + szam2}
      </h2>

      <input type="number" onChange={(e) => setSzam1(Number(e.target.value))} />

      <input type="number" onChange={(e) => setSzam2(Number(e.target.value))} />

      <button onClick={() => alert(`${szam1} + ${szam2} = ${szam1 + szam2}`)}>
        Kattints ide!
      </button>
    </>
  );
}

export default App;
