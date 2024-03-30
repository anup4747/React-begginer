import { useEffect, useState } from "react"
import "./style.css"

export default function loadMore(){

    const [loading, setLoading] = useState(false);
    const[products, setProducts] = useState([]);
    const [count , setCount] = useState(0);
    const [errorMsg , setErrorMsg] = useState(false);
 
    async function fetchProducts() {
        try {
            setLoading(true)
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`);
            const data = await response.json();
            console.log(data)

            if(data && data.products){
                setProducts((prevData)=>[...prevData, ...data.products]);
                setLoading(false)
            }
        } catch (error) {
            console.log(error);
            setErrorMsg(true);
        }
    }

    
    useEffect(()=>{
        fetchProducts();
    },[count])


    if (loading) {
        return <div>Loading data ! Please wait</div>
    }

    // if (errorMsg) {
    //     return <div>Error occured !!!! <br /></div>
    // }


   
    return <div className="container">

      <div className="product-container">
        {
            products && products.length ?
            products.map((item) => 
            <div className="current-item" key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
            </div> ) : null
        }
      </div>
      <div className="button-container">
        <button className="load-button" onClick={()=>setCount(count + 1)}> Load more</button>
      </div>
    </div>


}