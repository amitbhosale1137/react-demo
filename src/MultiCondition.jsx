import { useState } from "react"

const MultiCondition=()=>{

    const[count, setCounter] = useState(0)

    return(
        <>
        <h1>{count}</h1>
        <button onClick={()=>setCounter(count+1)}>Counter</button>

        {
            count==0?<h1>Condition 0</h1>
            :count==1?<h1>Condition 1</h1>
            :count==2?<h1>Condition 2</h1>
            :count==3?<h1>Condition 3</h1>
            :count==4?<h1>Condition 4</h1>
            :<h1>Other Condition</h1>
        }


        </>
    )
}

export default MultiCondition