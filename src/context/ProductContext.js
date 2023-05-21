import axios from "axios";
import { createContext,useContext,useReducer,useEffect } from "react";
import { useAuth } from "./AuthContext";

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
        cartList : [],
    })
    useEffect(() => {
        getProducts()
    },[])

    
    const getProducts = async() => {
        const  data= await fetch("/api/products");
        const   result = await data.json();
        dispatch({ type: "Initialization", payload: result.products })
    }

    const getCart = async(token) => {
        try{
            const {data} = await axios.get("/api/user/cart",
            {
                headers: {
                  authorization: token,
                },
              })
              dispatch({type : "CartDetails",payload : data.cart})
        }
        catch(error){
            console.log(error);
        }
    }

    const addToCart = async(product,token) => {
        try{
            const {data} = await axios.post("/api/user/cart",{
                product
            },
            {
                headers: {
                  authorization: token,
                },
              }
            )
            dispatch({type : "AddToCart",payload : data.cart})
        }
        catch(error){
            console.log(error);
        }
    }

    const deleteFromCart = async(id,token) => {
        try{
            const {data} = await axios.delete(`/api/user/cart/${id}`,
            {
                headers: {
                  authorization: token,
                },
              }
            )
            dispatch({type : "DeleteFromCart",payload : data.cart})
        }
        catch(error){
            console.log(error)
        }
    }

    const updateCart = async(id,token,type,qty) => {
        if(type==="decrement"){
            if(qty === 1){
               return deleteFromCart(id,token)
            }
        }
        try{
            const {data} = await axios.post(`/api/user/cart/${id}`,
            {
                action: {
                  type: type,
                }
              },
              {
                headers: {
                  authorization: token,
                },
              }
            )
            dispatch({type : "UpdateCart",payload : data.cart})
        }
        catch{

        }
    }

    return(
        <ProductContext.Provider value={{...state,dispatch,getCart,addToCart,deleteFromCart,updateCart}}>
            {children}
        </ProductContext.Provider>
    )
}

export const useProduct = () => useContext(ProductContext);