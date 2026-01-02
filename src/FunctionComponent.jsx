function EventCalling(){

    function callFun(){
        alert('function called')
    }
    return(
        <div>
            <h1>Event and Function call</h1>
            <button onClick={callFun}>Click Me</button>
        </div>
    )
}

export default EventCalling;