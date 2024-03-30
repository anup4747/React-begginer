import { useState } from "react"
import useLocalStorage from "./useLocalStorage"
import "./theme.css"

export default function Modechanger(){
    
    const [Mode, setMode] = useLocalStorage("theme" , "dark")

    function toggleTheme(){
        setMode(Mode === "light" ? "dark": "light" );
    }
    
    console.log(Mode);

    return (
        <div className="light-dark-mode" data-theme = {Mode}>
            <div className="container">
                <h1 className="heading">Dark / Light Mode Toggle</h1>
                <button className="Toggle-button" onClick={toggleTheme}>Toggle</button>
            </div>

        </div>
    )   
}