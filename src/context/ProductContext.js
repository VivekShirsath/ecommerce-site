import axios from "axios";
import { createContext,useContext,useReducer,useEffect } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
        wishList : [],
        individualProduct : {},
    })
    useEffect(() => {
        getProducts()
    },[])

    

   const notify = () => {
    toast(' Wow so easy!');
}
    
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
            notify();
        }
        catch(error){
            console.log(error);
        }
    }

    const addToWishList = async(product,token) => {
        try{
            const {data} = await axios.post("/api/user/wishlist",{
                product
            },
            {
                headers: {
                  authorization: token,
                },
              }
              )
              console.log(data);
              dispatch({type : "AddToWishList",payload : data.wishlist})
              notify();
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
            notify();
        }
        catch(error){
            console.log(error)
        }
    }

    const deleteFromWishList = async(id,token) => {
        try{
            const {data} = await axios.delete(`api/user/wishlist/${id}`,
            {
                headers: {
                  authorization: token,
                },
              }
            )
            dispatch({type : "DeleteFromWishList",payload : data.wishlist})
        }
        catch(error){
            console.log(error);
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

    const productDetails = async(id) => {
        try{
            const {data} = await axios.get(`/api/products/${id}`);
            dispatch({type : "ShowDetails",payload : data.product})
        }
        catch{

        }
    }

    return(
        <ProductContext.Provider value={{...state,dispatch,getCart,addToCart,deleteFromCart,updateCart,addToWishList,deleteFromWishList,
        productDetails}}>
            {children}
        </ProductContext.Provider>
    )
}

export const useProduct = () => useContext(ProductContext);