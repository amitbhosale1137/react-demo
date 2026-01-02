function EventCalling(){

    function callFun(){
        alert('function called')
    }

    const fruit=()=>{
        alert('apple')
    }

    return(
        <div>
            <h1>Event and Function call</h1>
            <button onClick={fruit}>Click Me</button>
        </div>
    )
}

export default EventCalling;