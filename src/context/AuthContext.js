import axios from 'axios';
import { createContext,useContext,useState } from "react";
import { useProduct } from './ProductContext';
import {toast} from 'react-toastify';

export const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
    const storage = JSON?.parse(localStorage?.getItem('loginDetails'));
    const {getCart,getWishlist} = useProduct();
    const [token,setToken] = useState(storage?.token);
    const [user,setUser] = useState(storage?.user);
    const [address,setAddress] = useState([
        {
            roomNo : "C29",
            area : "Glorinaa Valley",
            city:"Surat",
            state:"Gujarat",
        }
    ])

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
    const signUpHandler = async({ firstname,lastname,
    email,
    password,
    }) => 
    {
    try{
        const {status,data} = await axios.post("/api/auth/signup",{
            email,
            password,
            firstName : firstname,
            lastName : lastname,
    })
        if(status === 201){
            localStorage.setItem('loginDetails',JSON.stringify({
                token : data.encodedToken,
                user : data.createdUser,
            }));
            getCart(data.encodedToken);
            getWishlist(data.encodedToken)
            setToken(data.encodedToken);
            setUser(data.createdUser);
        }
      
    }
    catch(error){
        console.log(error);
    }
}

    const logInHandler = async(email,password) => {
        
        try{
            const {status,data} = await axios.post("/api/auth/login",{
                email,
                password,
            });
            
            if(status === 201 || status === 200){
                localStorage.setItem('loginDetails',JSON.stringify({
                    token : data.encodedToken,
                    user : data.foundUser,
                }));
                getCart(data.encodedToken);
                getWishlist(data.encodedToken)
                setToken(data.encodedToken);
                setUser(data.foundUser);
            }
        }
        catch(error){
           toastError("Invalid credentials")
        }
    }
    return(
        <AuthContext.Provider value={{signUpHandler,token,user,logInHandler,address,setAddress,setToken,setUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);