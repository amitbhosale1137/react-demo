import { useState } from "react"

function Skills(){

    const [skills, setSkills]= useState([])
    const handleSkills=(event)=>{
        console.log(event.target.value, event.target.checked);
        if(event.target.checked){
           setSkills([...skills, event.target.value]) 
        }else{
            setSkills([...skills.filter((item)=>item!=event.target.value)])
        }
        

    }
    return(
        <>
            <h1>Check Boxes Example</h1>
            <h4>Select Your Skills</h4>
            <input onChange={handleSkills} type="checkbox" id="php" value="php" />
            <label htmlFor="php">PHP</label>
            <br/>

            <input onChange={handleSkills} type="checkbox" id="java" value="java" />
            <label htmlFor="java">JAVA</label>
            <br/>

            <input onChange={handleSkills} type="checkbox" id="c#" value="c#" />
            <label htmlFor="c#">C#</label>
            <br/>

            <input onChange={handleSkills} type="checkbox" id="asp" value="asp" />
            <label htmlFor="asp">ASP</label>

            <h1>{skills.toString()}</h1>

        </>
    )
}

export default Skills