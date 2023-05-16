import axios from "axios";
import './productListing.css';
import { useState,useEffect } from 'react';
import { products } from '../../backend/db/products';


export const ProductListing = () => {
    return(
        <>
        <button onClick={() => getProducts()}>CLick</button>
        </>
    )
}