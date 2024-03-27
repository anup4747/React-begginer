import { useEffect, useState } from "react";

function Mycomponent() {

    const [height, setheight] = useState(window.innerHeight)
    const [width, setwidth] = useState(window.innerWidth)

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("event added")

        return () => {
            window.removeEventListener("resize", handleResize);
            console.log("event removed")


        }
    }, [])

    function handleResize() {
        setwidth(window.innerWidth);
        setheight(window.innerHeight);
    }

    return (
        <>
            <p>Current heidth and width of page</p>
            <p>Window width : {width}px</p>
            <p>Window height : {height}px</p>
        </>
    )
}

export default Mycomponent