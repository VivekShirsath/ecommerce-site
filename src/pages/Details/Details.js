import { useProduct } from "../../context/ProductContext"
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useParams } from "react-router-dom";
import './details.css'
import { useEffect } from "react";

export const Details = () => {
    const {individualProduct,addToCart,cartList,addToWishList,wishList,productDetails,isLoadingDetails} = useProduct();
    const {token} = useAuth();
    const {id} = useParams();

    const navigate = useNavigate();
    const {_id,title,company,price,categoryName,image,ratings,fastDelivery} = individualProduct;
    useEffect(() => {
        productDetails(id);
    })
    const isItemInCart = (item) =>{
        return cartList?.find((product) => product._id === item._id)
     }
 
     const isItemInWishList = (item) => {
         return wishList?.find((product) => product._id === item._id)
     }
    const handleClick = (item,) => {
        token ? (isItemInCart(item) ? navigate("/cart")
        : addToCart(item,token)) : navigate("/login")
     }
 
     const handleWishClick = (item) => {
         token ? (isItemInWishList(item) ? navigate("/wishlist")
        : addToWishList(item,token)) : navigate("/login")
     }
    return(
        <>
        { isLoadingDetails ? <div className="spinner">
        <i className="fa fa-spinner" aria-hidden="true"></i>
        </div> :
        <div className="details_container" key={_id}>
            <img className = "details_img"src={image} alt="product_img"/>
            <div className="details_right">
                <h3>{title}</h3>
                <p>By {company}</p>
                <p>₹ {price}</p>
                <hr></hr>
                <p>Category: {categoryName}</p>
                <p>Ratings: {ratings}</p>
                <p>FastDelivery: {fastDelivery}</p>
                <button className="card_btn" onClick = { () => handleClick({_id,title,company,price,categoryName,image,ratings})}>
                            {isItemInCart({_id,title,company,price,categoryName,image,ratings},cartList) ? "Go To Cart" : "Add To Cart"}
                            </button>
                <button className="card_btn" onClick = {() => handleWishClick({_id,title,company,price,categoryName,image,ratings})}>
                    {isItemInWishList({_id,title,company,price,categoryName,image,ratings},wishList) ? "Go to WishList" : "Add to WishList"}
                </button>
            </div>
        </div>
}
        </>
    )
}