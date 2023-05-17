import axios from "axios";
import { createContext,useContext,useReducer,useEffect } from "react";

import { reducer } from "../reducer/reducer";

export const ProductContext = createContext(null);

export const ProductProvider = ({children}) => {
    const[state,dispatch] = useReducer(reducer,{
        productList : [],
        isLoading : true,
    })
    useEffect(() => {
        getProducts()
    })

    const getProducts = async() => {
        const {data} = await axios.get("/api/products");
        dispatch({ type: "Initialization", payload: data.products })
    }

    return(
        <ProductContext.Provider value={{state}}>
            {children}
        </ProductContext.Provider>
    )
}

export const useProduct = () => useContext(ProductContext);