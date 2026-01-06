import Wrapper from "./Wrapper";

function App(){
  return(
    <>
      <h1>Props in React Js</h1>
      <Wrapper>
        <h1>Hello Everyone</h1>
      </Wrapper>
      <br />

      <Wrapper>
        <h1>Hello Amit</h1>
      </Wrapper>
      <br />

      <Wrapper>
        <h1>Hello Admin</h1>
        <h3 style={{color:'red'}}>Please Login</h3>
      </Wrapper>
    </>
  )
}

export default App;