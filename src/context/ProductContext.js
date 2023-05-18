import axios from "axios";
import { createContext,useContext,useReducer,useEffect } from "react";

import { reducer } from "../reducer/reducer";

export const ProductContext = createContext(null);

export const ProductProvider = ({children}) => {
    const[state,dispatch] = useReducer(reducer,{
        productList : [],
        isLoading : true,
        checkboxesForCategory : [],
        sortByPrice : null,
        sortByStar : null,
        sliderValue : 30000,
        searchText : "",
    })
    useEffect(() => {
        getProducts()
    })

    
    const getProducts = async() => {
        const  data= await fetch("/api/products");
        const   result = await data.json();
        dispatch({ type: "Initialization", payload: result.products })
    }

    return(
        <ProductContext.Provider value={{...state,dispatch}}>
            {children}
        </ProductContext.Provider>
    )
}

export const useProduct = () => useContext(ProductContext);