import { useProduct } from "../../context/ProductContext"
import { useAuth } from "../../context/AuthContext";
import { useNavigate  } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import './cart.css';
import { useEffect } from "react";

export const Cart = () => {
    const {cartList,deleteFromCart,updateCart,wishList,addToWishList,getCart} = useProduct();
    const {token} = useAuth();
    const navigate = useNavigate();
    const totalPrice = cartList?.reduce((acc,{price,qty}) => acc + price *qty ,0);

    const isItemInWishList = (item) => {
        return wishList?.find((product) => product._id === item._id)
    }
    const handleClick = item => {
        isItemInWishList(item) ? navigate('/wishlist') : addToWishList(item,token)
    }

   
   
    return(
        <>
        { cartList?.length === 0 && <p className="title">Cart is empty</p>}
        { cartList?.length !== 0 && <h3 className="title">My Cart</h3>}
         { cartList?.length !== 0 && 
         <div className="cart_container">
        <div className="cart_list">
         {cartList?.map(({_id,title,company,price,categoryName,image,qty}) => {
                    return(
                        <div className="cart_card">
                        <img className = "cart_img"src={image} alt="product_img"/>
                        <div className="cart_info">
                            <p>{title}</p>
                            <p>By {company}</p>
                            <p>{price}</p>
                            <div className="cart_update">
                                <button className="card_add" onClick={() => updateCart(_id,token,"increment")}>
                                    +</button>
                                <p>{qty}</p>
                                <button className="card_add" onClick={() => updateCart(_id,token,"decrement",qty)}>
                                    -</button>
                            </div>
        
                            <button className="card_btn" onClick={() => deleteFromCart(_id,token)}
                            >Remove from cart</button>
                            <button className="card_btn" onClick={() => handleClick({_id,title,company,price,categoryName,image,qty})}>
                            {isItemInWishList({_id,title,company,price,categoryName,image,qty}) ? "Go to WishList" :
                            "Add to WishList"}</button>
                            
                        </div>
                        </div>
                    )
                })}
                </div>
                <div className="checkout">
                <h3 className="title">Price Details</h3>
                <hr></hr>
                <div className="cart_price">
                    <p>Price({cartList.length} items):</p>
                    <p>₹{totalPrice}</p>
                </div>
                <div className="cart_price">
                    <p>Delivery Charge</p>
                    <p>₹0</p>
                </div>
                <hr></hr>
                <div className="cart_price">
                    <h3>Total Price</h3>
                    <h3>₹{totalPrice}</h3>
                </div>
                <NavLink className="checkout_btn"to ="/checkout"><button className="card_btn">Checkout
                </button></NavLink>
                </div>
                </div>
            } 
        </>
    )
}