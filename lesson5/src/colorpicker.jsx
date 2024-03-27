import React, { useState } from "react"
import "./colorpicker.css"


function colorPicker(){

    const[color , setColor] = useState("#000000")

    const defineColor = (event) => {
        setColor(event.target.value)
    }

    return(
        <body style={{backgroundColor: color}}>
            <div>
                
                <div className="color-display" > 
                    <h1 >Color Picker</h1>
                    <p >Selected color : {color}</p>
                    <input type="color" value={color} onChange={defineColor} />
                 </div>
            </div>
        </body>
    )
}

export default colorPicker;