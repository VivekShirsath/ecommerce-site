
import './productCard.css';
import { useProduct } from "../../context/ProductContext";


export const ProductCard = () => {
    const {productList,checkboxesForCategory,sortByPrice,sortByStar,sliderValue,
        searchText,isLoading} = useProduct();


    const checkedList = checkboxesForCategory?.length > 0 ?
         productList.filter((item) => checkboxesForCategory.find((element) => item.categoryName === element ))
         : productList;

        //  checkboxesForCategory.every((element) => item.categoryName === element
    const filterforPrice = sortByPrice ? checkedList.sort((a,b) => sortByPrice === "High to Low" ? b.price-a.price : a.price-b.price)
    : checkedList;

    const filterforRatingList = sortByStar ? filterforPrice.filter(({ratings}) => ratings > sortByStar) : filterforPrice;

    const filteredList = filterforRatingList?.filter(({price}) => Number(price) <= sliderValue);

    const searchedList = searchText.length > 0 ? filteredList.filter(({title}) => title.toLowerCase().includes(searchText)) : filteredList;

  
    return(
        <div className="products_name">
            <div className='menu'>
            <h4>All Products</h4>
            </div>
        <div className="furniture_products">
            {isLoading && 
            <div className="spinner">
            <i className="fa fa-spinner" aria-hidden="true"></i>
            </div>}
            {
                !isLoading && searchedList?.map(({_id,title,company,price,categoryName,image,ratings}) => {
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