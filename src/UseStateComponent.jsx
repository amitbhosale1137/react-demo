import {useState} from 'react'

function UseStateHooks(){

    const [fruit, setFruit] = useState('Apple')
    const handleFruit =()=>{
        setFruit('Banana')
    }
    return(
        <>
        <h1>Use State</h1>  
        <h1>{fruit}</h1>
        <button onClick={handleFruit}>Change Fruit</button>
        </>
        
    )
}

export default UseStateHooks