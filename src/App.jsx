
import './App.css'
import Header from './Header'
import Login, { Profile } from './UserComponent'

function App() {

  const name = undefined

  const userObj ={
    name:'Amit',
    email:'amit@gmail.com',
    age:30
  }

  const userArray =['amit','priya','sanket']

  let x = 10
  let y = 20

  function fruit(){
    return 'Apple'
  }

  function sum(a,b){
    return a+b
  }

  function operation(a,b, op){
    if(op=='+'){
      return a+b;
    }else if(op=='-'){
      return a-b
    }else{
      return a*b
    }
  }

  return (
    <>
      <h1>React 19 Version</h1>
      <Header/>
      <Login/>
      <Profile/>
      <h1>{name? name: 'user not found'}</h1>  
      Z : {x+y} 
      <h1>{fruit()}</h1>
      <h1>{sum(10,30)}</h1>
      <h2>{operation(10,20,'')}</h2>
      <h2>{userObj.email}</h2>
      <h2>{userArray[1]}</h2>
    </>
  )
}

export default App
