import axios from 'axios';
import { createContext,useContext,useState } from "react";

export const CartContext = createContext(null);

export const CartProvider = ({children}) => {
    const [cartItems , setCartItems] = useState();

    const getCart = async() => {
        try{
            const res = await axios.get("")
        }
        catch{

        }
    }
    return(
        <CartContext.Provider>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext);