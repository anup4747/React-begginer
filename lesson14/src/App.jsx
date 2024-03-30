import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Data from "./data.js"
import TreeView from './index.jsx'

function App() {
 
  return (
    <>
     <div className='main-container'>
      <TreeView menus={Data} />

     </div>
    </>
  )
}

export default App
