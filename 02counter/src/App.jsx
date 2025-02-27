import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  //  hooks is used
  //[ viable name any ,function name and method ]

  let [counter,setCounter] = useState(15)

  // let [counter,lokeshCounter] = useState(15)
  
  //let counter = 15
  const addValues = () =>{
    // console.log("values  added", Math.random()); 
    // console.log("Clicked",Math.random());
    console.log("Clicked",counter);
    // counter = counter + 1
    // lokeshCounter(counter + 1)

    setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounter=> prevCounter +1)
    setCounter(prevCounter=> prevCounter +1)
    setCounter(prevCounter=> prevCounter +1)
    
    
        
   
   }
      const removeValue = () =>{
        console.log("RemoveVlaue:",counter);
        
        setCounter(counter - 1)
      }
   

  
  return (
    <>
      <h1>React counter Project</h1>
      <h2>Counter Value: {counter}</h2> 

      <button
       onClick={addValues}
       >Add Value {counter} </button>
      <br/>
      <button
      onClick={removeValue}
      >remove value {counter} </button>
      <p> Footer: {counter} </p>
    </>
  )
}

export default App
