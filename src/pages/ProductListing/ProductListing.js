
import './productListing.css';
import { Filter } from "../../components/Filter/Filter";
import { ProductCard } from "../../components/ProductCard/ProductCard";


export const ProductListing = () => {
   
    return(
        <div className="products">
        <Filter/>
        <ProductCard/>
        </div>
    )
}