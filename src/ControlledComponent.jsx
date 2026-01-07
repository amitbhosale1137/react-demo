import { useState } from "react"

function ControlledComponent(){
    const [name, setName] =useState('')
    const [password, setPassword] =useState('')
    const [email, setEmail] =useState('')
    return(
        <>
            <h1>Controlled Component</h1>
                <input type="text" value={name} onChange={(event)=>setName(event.target.value)} placeholder="Enter Name" />
                <br/><br/>
                <input type="password" value={password} onChange={(event)=>setPassword(event.target.value)} placeholder="Enter Password" />
                <br/><br/>
                <input type="text" value={email} onChange={(event)=>setEmail(event.target.value)} placeholder="Enter Email" />
                <br/><br/>
                <button>Submit</button>
                <button onClick={()=>{setName('');setPassword('');setEmail('')}}>Clear</button>
                <h3>{name}</h3>
                <h3>{password}</h3>
                <h3>{email}</h3>

                {/* Controlled Component 
                - A controlled component is a form whose input filed value is 
                controlled by React's state

                - Here's how it works:
                    1 Store input value in State
                    2 Use Change handler with input field
                    3 Value attribute attached with State

                - Benefits
                    1 Single Source of Truth
                    2 Validation and Manipulation Before Submit
                    3 Dynamic Updates Values
                    
                */}
        </>
    )
}

export default ControlledComponent