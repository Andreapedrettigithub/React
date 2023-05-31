import { React } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw, faShoppingCart } from "@fortawesome/free-solid-svg-icons";




export const CartWidget = () => {
    return(
       
        <FontAwesomeIcon icon={faPaw} />
        
    );
}

export default CartWidget;

export const CartWidget2 = () =>{
    return(
        <FontAwesomeIcon icon={faShoppingCart} />
        
        


    );
}

