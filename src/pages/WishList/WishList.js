import { useProduct } from "../../context/ProductContext"
import { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import './wishlist.css'

export const WishList = () => {
  const {wishList,deleteFromWishList,cartList,addToCart,updateCart} = useProduct();
    const {token} = useAuth();

    const isItemInCart = (item) =>{
      return cartList?.find((product) => product._id === item._id)
   }

   const handleClick = (item) => {
    isItemInCart(item) ? updateCart(item._id,token,"increment") :addToCart(item,token) 
   }

    return(
        <>
        { wishList?.length === 0 && <p className="title">WishList is empty</p>}
        {wishList?.length !== 0 && <h3 className="title">My WishList</h3>}
        <div className="wishlist_container">
        {wishList?.length !== 0 && 
          wishList?.map(({_id,title,company,price,categoryName,image,qty}) => {
            return(
              <div className="wisList_card">
                        <img className = "cart_img"src={image} alt="product_img"/>
                        <div className="cart_info">
                            <p>{title}</p>
                            <p>By {company}</p>
                            <p>{price}</p>
                            <button className="card_btn" onClick = {() => deleteFromWishList(_id,token)}
                            >Remove from WishList</button>
                            <button className="card_btn" onClick = { () => handleClick({_id,title,company,price,categoryName,image})}>
                             {isItemInCart({_id,title,company,price,categoryName,image,qty})
                             ? "Increase Quantity" : "Add To Cart"} 
                            </button>
                        </div>
                        </div>
            )
          })
        
        }
        </div>
        </>
    )
}