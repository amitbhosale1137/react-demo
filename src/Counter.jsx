import { useState } from "react";

const Counter=()=>{

    const[count, setCount]= useState(0)
    const[rCounter, setRCounter] = useState(10)
    return(
        <>
        <h1>Counter: {count}</h1>
        <h1> R Counter: {rCounter}</h1>       
        <button onClick={()=> setCount(count+1)}>+</button>
        <button onClick={()=> setRCounter(rCounter-1)}>-</button>
        </>
    )
}

export default Counter;