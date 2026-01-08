import { useState } from "react";
import Clock from "./Clock";

function App() {
  const [color, setColor] = useState("green");
  return (
    <>
      <h3>Example of Clock</h3>
      <select onChange={(event) => setColor(event.target.value)}>
        <option value={"red"}>Red</option>
        <option value={"blue"}>Blue</option>
        <option value={"green"}>Green</option>
        <option value={"orange"}>Orange</option>
      </select>
      <Clock color={color} />
    </>
  );
}

export default App;
