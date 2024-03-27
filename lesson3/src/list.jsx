import "./list.css"
import PropTypes from "prop-types"
function list( props) {
    
    // alphabetical order
    // fruit.sort((a, b) => a.name.localeCompare(b.name));

    // REVERSE alphabetical order
    // fruit.sort((a,b) => b.name.localeCompare(a.name)); 

    // const lowcalfruits = fruit.filter(fruit => fruit.calories <= 100)
    // const Highcalfruits = fruit.filter(fruit => fruit.calories >= 100)


    const itemlist  =  props.item; 


    const ItemList = itemlist.map(item => <li key={item.id}>{item.name} : <b>{item.calories}</b> </li>)
    return (
        <>
            <h3 className="header-list">{props.catagory}</h3>
            <ol className="main-list">{ItemList}</ol>

        </>
    );
}

list.propTypes = {
    catagory : PropTypes.string,
    items : PropTypes.arrayOf(PropTypes.shape({id : PropTypes.number , name : PropTypes.string , calories : PropTypes.number})),

}

list.defaultProps = {
    catagory : "Catagory",
    item : [],
}


export default list;