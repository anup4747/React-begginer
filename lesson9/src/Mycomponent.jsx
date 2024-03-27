import { useState } from "react"
import "./Mycomponent.css"
import { useEffect } from "react";

function Mycomponent() {

    const [time , setTime] = useState(new Date());

    useEffect(()=>{
        const intervalID= setInterval(()=> {
            setTime(new Date())
        },1000)

        return ()=>{
            clearInterval(intervalID);
        }
    },[])

    function formatTime(){
        let hours = time.getHours()
        const Minutes = time.getMinutes()
        const Seconds = time.getSeconds()
        const meridiem = hours >= 12 ? "PM" : "AM";

        hours = hours % 12 || 12;

        return `${padzero(hours)} : ${padzero(Minutes)} : ${padzero(Seconds)} ${padzero(meridiem)}`
    }

    function padzero(number){
        return (number < 10 ? "0" : "") + number

    }

    return (
        <>
            <div className="digital-clock">
                <div className="clock">
                    <span> {formatTime()} </span>
                </div>
            </div>
        </>
    )
}

export default Mycomponent