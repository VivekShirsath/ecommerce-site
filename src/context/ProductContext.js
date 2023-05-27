import axios from "axios";
import { createContext,useContext,useReducer,useEffect } from "react";
import { toast } from "react-toastify";

import { reducer } from "../reducer/reducer";

export const ProductContext = createContext(null);

export const ProductProvider = ({children}) => {
    
    const[state,dispatch] = useReducer(reducer,{
        productList : [],
        isLoading : true,
        checkboxesForCategory : [],
        sortByPrice : "",
        sortByStar : "",
        sliderValue : 30000,
        searchText : "",
        cartList : [],
        wishList : [],
        individualProduct : {},
        isDrawer : false,
    })
    useEffect(() => {
        getProducts()
    },[])

    const toastSuccess = (message) => {
        toast.success(message, {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
    }

    const toastError = (message) => {
        toast.error(message, {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
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
           toastSuccess("Added To Cart");
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
              
              dispatch({type : "AddToWishList",payload : data.wishlist})
              toastSuccess("Added To WishList")
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
            toastError("Deleted From Cart")
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
            toastError("Deleted From WishList")
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