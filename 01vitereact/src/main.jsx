import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
// import {jsx as _jsx} from "react/jsx-runtime.js"

function MyApp()
{
  return(
      <div>
        <h1>Custom App | !</h1>
        </div>
  )
}

// const ReactElement = {
//      type: 'a',
//       props: {
//           href: 'https://google.com',
//           target: '_black'
//      },
//      children: 'Click me to visit google'
//   }

 const anotherElement = (
    <a href='https://google.com' target='_blank'>Vist Google</a>
 )
 const  anotherUser = "Chai aur lokesh"
  const  reactElement  = React.createElement(
    'a' ,// parameter
    { href: 'https://google.com',target: '_black'}, //object
    'Click to me visit google',
    anotherUser
  )
createRoot(document.getElementById('root')).render(
  // <StrictMode>
    // <MyApp />
    // <App />
    // MyApp()
  // </StrictMode>,
      
   reactElement

  // <ReactElement />
  // ReactElement()
  // ReactElement

  // anotherElement 
  // ReactElement
)
