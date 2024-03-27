import "./click.css"
import React , { useState } from "react";

function button() {


    const [number , setNumber] = useState(0);

    const Increment = () => {
        setNumber(number + 1);
    }

    const Decrement = () => {
        setNumber(number - 1);
    }
    const Reset = () => {
        setNumber(0);
    }

    return (
        <>
            <div className="card">
                <h1 className="header">Counter</h1>
                <div className="display-num"><b>{number}</b></div>
                <div className="button-menu">
                    <button onClick={Increment}>Increment</button>
                    <button onClick={Reset}>Reset</button>
                    <button onClick={Decrement}> Decrement</button>
                </div>
            </div>

        </>
    )
}

export default button;

