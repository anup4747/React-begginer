import React, { useState } from "react";

function Mycomponent() {
    const [foods, setfoods] = useState(["Apple", "Banana", "Coconut"]);

    const addfood = () =>{
        const newfood = document.getElementById("addfood").value;
        setfoods([...foods , newfood])
        document.getElementById("addfood").value = "";

    }

    return (
        <>
            <div>
                <h1>My food</h1>
                <input type="text" id ="addfood" />
                <button onClick={addfood}>Add food</button>
                <ol>

                    {foods.map((food, index) =>
                        <li key={index}>{food}</li>
                    )}

                </ol>
            </div>
        </>
    );
}

export default Mycomponent;