
import './App.css'
import Header from './Header'
import Login, { Profile } from './UserComponent'

function App() {

  const name ='Amit Bhosale'
  let x = 10
  let y = 20

  function fruit(){
    return 'Apple'
  }

  return (
    <>
      <h1>React 19 Version</h1>
      <Header/>
      <Login/>
      <Profile/>
      <h1>{name}</h1>  
      Z : {x+y} 
      <h1>{fruit()}</h1>
    </>
  )
}

export default App
