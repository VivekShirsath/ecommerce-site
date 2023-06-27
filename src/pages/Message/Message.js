
import { useProduct } from "../../context/ProductContext"
import { useNavigate } from "react-router-dom";
import "./message.css"

export const Message = () => {
    const {selectedAddress,dispatch} = useProduct();
    const navigate = useNavigate()
    
    const handleExplore = () => {
        dispatch({type : "OrderAddress",payload : []})
        navigate("/product")
    }
    return(
        <>
        <h3 className="address_msg">Thanks for the order , it will be delivered in the given address : 
            {selectedAddress.roomNo},{selectedAddress.area},{selectedAddress.city},
            {selectedAddress.state} in 3-4 days.
        </h3>
        <button className="place_btn" onClick={() => handleExplore()}
       >Explore More</button>
        </>
    )
}