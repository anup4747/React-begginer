import { useEffect, useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import "./style.css"

export default function ImageSlider({ url, limit = 5, page = 1 }) {
    const [image, setImage] = useState([]);
    const [current, setCurrent] = useState(0);
    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(false);

    async function fetchImages(getUrl) {
        try {
            setLoading(true);
            const responce = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
            const data = await responce.json();

            if (data) {
                setImage(data);
            }
            setLoading(false);
        } catch (e) {
            setErrorMsg(e.message);
            setLoading(false);

        }
    }

    

    useEffect(() => {
        if (url !== "") fetchImages(url);
    }, [url]);

    if (loading) {
        return <div>Loading data ! Please wait</div>
    }

    if (errorMsg !== null) {
        return <div>Error occured !!!! <br /> {errorMsg}</div>
    }

    function handlePrevious(){
        
        setCurrent(current === 0 ? image.length - 1  : current - 1)

    }

    function handleNext(){
        setCurrent(current === image.length - 1 ? 0 : current + 1  )
    

    }

    return (
        <div className="container">
            <FaArrowAltCircleLeft onClick={handlePrevious} className="arrow left" />
            {
                image && image.length
                    ? image.map((imageItem ,index) => (
                        <img key={imageItem.id} src={imageItem.download_url} alt={imageItem.download_url} className={current === index ? "current-image" : "current-image hide-current-image"} />
                    )) : null
            }

            <FaArrowAltCircleRight onClick={handleNext} className="arrow right" />
            <span className="circle-indicators">
            {
                image && image.length ?
                image.map((_,index)=> 
                <button
                key={index}
                className={current === index ? "current-indicator": "current-indicator update-current-indicator"} onClick={()=> setCurrent(index)  }></button>
                ) :null
            }
            </span>


        </div>
    )

}