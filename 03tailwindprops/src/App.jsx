import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "latesh",
    age:24
  }
  let Array = [1,2,3,4,5]

  return (
    <>
      
     
      <h1 className='bg-green-400  text-black p-4 rounded-xl mb-4'>Tailwind test CSS</h1>"
      <Card username = "LOKEHS"  btnText = "click me"/>
      <Card username= "Patil" />
       
    </>
  )
}

export default App
