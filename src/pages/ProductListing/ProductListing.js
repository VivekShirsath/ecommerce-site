
import './productListing.css';
import { useState,useEffect } from 'react';
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