import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import List from "./list.jsx"

function App() {
  const fruit = [
    { id: 1, name: "Apple", calories: 45 }
    ,{ id: 2, name: "Orange", calories: 63 }
    ,{ id: 3, name: "Banana", calories: 99 }
    ,{ id: 4, name: "Kiwi", calories: 150 }
    ,{ id: 5, name: "Grapes", calories: 11 }
    ,{ id: 6, name: "Watermelon", calories: 153 }]

  const vegetable = [
    { id: 1, name: "Potatoes", calories: 145 }
    ,{ id: 2, name: "Celery", calories: 642 }
    ,{ id: 3, name: "Carrots", calories: 111 }
    ,{ id: 4, name: "Corn", calories: 10 }
    ,{ id: 5, name: "Brocoly", calories: 121 }
    ,{ id: 6, name: "Flower", calories: 53 }]


  return (
    <>  
    {fruit.length > 0 ? <List item = {fruit} catagory  = "Fruits"/>   : null}    
    {vegetable.length > 0 ? <List item = {vegetable} catagory  = "Vegetable"/>   : null   }
     
    </>
  )
}

export default App
