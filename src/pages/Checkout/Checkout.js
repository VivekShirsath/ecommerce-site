import { useAuth } from "../../context/AuthContext"
import { useProduct } from "../../context/ProductContext";
import './checkout.css'

export const Checkout = () => {
    const {address} = useAuth();
    const {cartList} = useProduct();
    const totalPrice = cartList?.reduce((acc,{price,qty}) => acc + price *qty ,0);

    return(
        <>
         <h3 className="checkout-title">Checkout</h3>
        <div className="check-container">
       <div>
        <hr></hr>
        <h4 className="aligncenter">Order Details</h4>
        <hr></hr>
        <div className="flex2col">
            <h4>Item</h4>
            <h4>Qty</h4>
        </div>
        {
            cartList?.map(({_id,title,company,price,categoryName,image,qty}) => {
                return(
                    <div className="flex2col" key={_id}>
                        <p>{title}</p>
                        <p>{qty}</p>
                        </div> 
                )
            })
        }
        <hr></hr>
        <h4 className="aligncenter">Price Details</h4>
        <hr></hr>
        <div className="flex2col">
            <p>Price</p>
            <p>₹{totalPrice}</p>
        </div>
        <div className="flex2col">
            <p>Delivery Charges</p>
            <p>₹0</p>
        </div>
        <div className="flex2col">
            <h4>Total Amount</h4>
            <h4>₹{totalPrice}</h4>
        </div>
        <hr></hr>
        <h4 className="aligncenter">Address:</h4>
        <hr></hr>
        <div className="address-info">
        {
            address?.map(({roomNo,area,city,state,pinCode}) => {
                return(
                    <div>
                        <input type="radio"
                        checked
                        />
                        <label>
                        {roomNo},{area},{city},{state}
                        </label>
                    </div>
                )
            })
        }
       </div>
       <button className="place_btn">Place Order</button>
       </div>
        </div>
        </>
    )
}