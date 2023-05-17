
import './productCard.css';
import { useProduct } from "../../context/ProductContext";


export const ProductCard = () => {
    const {state} = useProduct();
    return(
        <div className="products_name">
            <div className='menu'>
            <h4>All Products</h4>
            </div>
        <div className="furniture_products">
            {
                state?.productList?.map(({_id,title,company,price,categoryName,image,ratings}) => {
                    return(
                    <div className="card" key={_id}>
                    <img className= "card_img"src={image} alt="productimage"/>
                    <p className="card_title">{title}</p>
                    <div className="card_flex">
                        <p className = "card_company">By {company}</p>
                        <p className="card_ratings">{ratings}
                        <i class="fa-solid fa-star" style={{color : "green"}}></i></p>
                    </div>
                        <p className="card_price">₹ {price}</p>
                        <button className="card_btn">Add to Cart</button>
                        <div className="card_wish">
                        <i class="fa-regular fa-heart"></i>
                        </div>
                    </div>
                )})
            }

        </div>
        </div>
    )
}