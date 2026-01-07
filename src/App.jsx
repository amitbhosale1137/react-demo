import { useState } from "react";
import Wrapper from "./Wrapper";

function App(){
  const[val,setVal]=useState("Amit")
  return(
    <>
      <h1>Props in React Js</h1>
      <Wrapper color='orange'>
        <h1>Hello Everyone</h1>
      </Wrapper>
      <br />

      <Wrapper color='blue'>
        <h1>Hello Amit</h1>
      </Wrapper>
      <br />

      <Wrapper>
        <h1>Hello Admin</h1>
        <h3 style={{color:'red'}}>Please Login</h3>
      </Wrapper>

      <input type="text" value={val} onChange={(event)=>setVal(event.target.value)} placeholder="Enter Name" />
      <button onClick={()=>setVal('')}>Clear</button>
      <h1>{val}</h1>
    </>
  )
}

export default App;