import Employee from "./Employee";

function App(){
  return(
    <>
      <h1>Props in React Js</h1>
      <Employee name='Amit'/>
      {/* with passing name props */}
      <Employee/>  
      {/* without passing name props */}
    </>
  )
}

export default App;