import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greet from "./greet.jsx"

function App() {
  
  return (
    <>
     <Greet isLoggedIn = {true} userName = "Anup"/>
    </>
  )
}

export default App
