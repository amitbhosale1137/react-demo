
import { useState } from 'react'
import './App.css'
import College from './College'
import Counter from './Counter'
import EventCalling from './FunctionComponent'
import MultiCondition from './MultiCondition'
import Student from './Student'
import ToggleFunction from './ToggleFunction'
import User from './User'
import UseStateHooks from './UseStateComponent'
// import Header from './Header'
// import Login, { Profile } from './UserComponent'

function App() {

  // const name = undefined

  // const userObj ={
  //   name:'Amit',
  //   email:'amit@gmail.com',
  //   age:30
  // }

  // const userArray =['amit','priya','sanket']

  // let x = 10
  // let y = 20

  // function fruit(){
  //   return 'Apple'
  // }

  // function sum(a,b){
  //   return a+b
  // }

  // function operation(a,b, op){
  //   if(op=='+'){
  //     return a+b;
  //   }else if(op=='-'){
  //     return a-b
  //   }else{
  //     return a*b
  //   }
  // }

  // let userName="Amit Bhosale"
  // let age=32
  // let email="amit@gmail.com"

  // let userObj={
  //   userName:"Amit Bhosale",
  //   age:32,
  //   email:"amit@gmail.com"
  // }

  // let userObj2={
  //   userName:"Peter",
  //   age:30,
  //   email:"peter@gmail.com"
  // }

  // let userObj3={
  //   userName:"Mike",
  //   age:36,
  //   email:"mike@gmail.com"
  // }

  // let collegeName=['ITI','MIT','IET', 'DU', 'MU']

  const[student, setStudent]= useState()

  return (
    <>
      <h1>React 19 Version</h1>
      {
       student && <Student name={student}/>
      }

      <button onClick={()=>setStudent('Amit')}>Update Student</button>

      {/* <User name={userName} age={age} email={email} /> */}

      {/* <College name={collegeName}/>
      <User user={userObj}/>
      <User user={userObj2}/>
      <User user={userObj3}/> */}
      
      {/* 
      <MultiCondition/>
      <ToggleFunction/>
      <UseStateHooks/>
      <Counter/>
      <EventCalling/>
      <Header/>
      <Login/>
      <Profile/>
      <h1>{name? name: 'user not found'}</h1>  
      Z : {x+y} 
      <h1>{fruit()}</h1>
      <h1>{sum(10,30)}</h1>
      <h2>{operation(10,20,'')}</h2>
      <h2>{userObj.email}</h2>
      <h2>{userArray[1]}</h2> */}
    </>
  )
}

export default App
