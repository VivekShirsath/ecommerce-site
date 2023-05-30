
import './productCard.css';
import { useProduct } from "../../context/ProductContext";
import { useAuth } from '../../context/AuthContext';
import { useNavigate , useLocation} from 'react-router-dom';
import { NavLink } from 'react-router-dom';


export const ProductCard = () => {
    const {productList,checkboxesForCategory,sortByPrice,sortByStar,sliderValue,
        searchText,isLoading,addToCart,cartList,addToWishList,wishList,deleteFromWishList
    ,dispatch,isDrawer} = useProduct();
    
    const {token} = useAuth();
    const navigate = useNavigate();
    const location = useLocation()
    const checkedList = checkboxesForCategory?.length > 0 ?
         productList.filter((item) => checkboxesForCategory.find((element) => item.categoryName === element ))
         : productList;

    const list = [...checkedList]
    const filterforPrice = sortByPrice.length > 0 ? list.sort((a,b) => sortByPrice === "High to Low" ? b.price-a.price : a.price-b.price)
    : checkedList;

    const filterforRatingList = sortByStar.length > 0 ? filterforPrice.filter(({ratings}) => ratings > sortByStar) : filterforPrice;

    const filteredList = filterforRatingList?.filter(({price}) => Number(price) <= sliderValue);

    const searchedList = searchText.length > 0 ? filteredList.filter(({title}) => title.toLowerCase().includes(searchText)) : filteredList;



    const isItemInCart = (item) =>{
       return cartList?.find((product) => product._id === item._id)
    }

    const isItemInWishList = (item) => {
        return wishList?.find((product) => product._id === item._id)
    }

    const handleClick = (item,e) => {
    e.stopPropagation();
    e.preventDefault();
       token ? (isItemInCart(item) ? navigate("/cart")
       : addToCart(item,token)) : navigate('/login', { state: { from: location } })
    }

    const handleWishClick = (item,e) => {
        e.stopPropagation();
        e.preventDefault();
        token ? (isItemInWishList(item) ? deleteFromWishList(item._id,token)
       : addToWishList(item,token)) : navigate("/login",{ state: { from: location } })
    }


    return(
        <>
        {!isLoading && searchedList?.length === 0 ? <h4 className="msg">Sorry,No Products Found.</h4>
        :
        <div className={isDrawer ? "products_name ham" : "products_name"}>
            <div className='menu'>
            <div className="hamburger" >
            <i className="fa fa-arrow-up" aria-hidden="true" onClick={() => dispatch({type:"Drawer"})}>
            </i>
            <h4>Filters</h4>
            </div>
            </div>
        <div className="furniture_products">
            {isLoading && 
            <div className="spinner">
            <i className="fa fa-spinner" aria-hidden="true"></i>
            </div>}
            {
                !isLoading && searchedList?.map(({_id,title,company,price,categoryName,image,ratings}) => { 
                    return(
                    <NavLink to = {"details/" + _id}>
                    <div className="card" key={_id}>
                    <img className= "card_img"src={image} alt="productimage"/>
                    <p className="card_title">{title}</p>
                    <div className="card_flex">
                        <p className = "card_company">By {company}</p>
                        <p className="card_ratings">{ratings}
                        <i className="fa-solid fa-star" style={{color : "green"}}></i></p>
                    </div>
                        <p className="card_price">₹ {price}</p>
                        <button className="card_btn" onClick = { (e) => handleClick({_id,title,company,price,categoryName,image,ratings},e)}>
                            {isItemInCart({_id,title,company,price,categoryName,image,ratings},cartList) ? "Go To Cart" : "Add To Cart"}
                            </button>
                        <span className="card_wish" onClick = {(e) => handleWishClick({_id,title,company,price,categoryName,image,ratings},e)}
                        style={{color : isItemInWishList({_id,title,company,price,categoryName,image,ratings},wishList) ? "red" : ""}}>
                        <i className="fa-regular fa-heart"></i>
                        </span>
                    </div>
                    </NavLink>
                )})
            }

        </div>
        </div>
}
        </>
    )
}