import { useState } from "react"

const ToggleFunction=()=>{
    const[display, setDisplay] = useState(true)
    return(
        <>
            <h1>Toggle Function Example</h1>
            <button onClick={()=>{setDisplay(!display)}}>Toggle</button>
            {
                display? <h1>Amit Bhosale</h1>:null
            }

            
        </>
    )
}

export default ToggleFunction