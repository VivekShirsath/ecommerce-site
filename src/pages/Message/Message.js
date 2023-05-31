
import { useProduct } from "../../context/ProductContext"
import "./message.css"

export const Message = () => {
    const {selectedAddress} = useProduct();
    
    return(
        <>
        <h3 className="address_msg">Thanks for the order , it will be delivered in the given address : 
            {selectedAddress.roomNo},{selectedAddress.area},{selectedAddress.city},
            {selectedAddress.state} in 3-4 days.
        </h3>
        </>
    )
}