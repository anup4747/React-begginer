import "./greet.css"
import PropTypes from "prop-types"

function greet(props){

    const welcomeMessage = <h2 className="welcome-message">Welcome to Website {props.userName}</h2>

    const errorMessage =<h2 className="error-message">There is an error {props.userName}</h2>

    return(
        props.isLoggedIn ?  welcomeMessage: errorMessage
    )
}

greet.prototype = {
    isLoggedIn : PropTypes.bool,
    userName : PropTypes.string,

}

greet.defaultPropd = {
    isLoggedIn : false,
    userName : "Guest"
}

export default greet;