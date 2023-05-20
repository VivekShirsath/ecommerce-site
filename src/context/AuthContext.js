import axios from 'axios';
import { createContext,useContext,useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
    const storage = JSON?.parse(localStorage?.getItem('loginDetails'));
    const [token,setToken] = useState(storage?.token);
    const [user,setUser] = useState(storage?.user);

    const signUpHandler = async({ username, 
    email,
    password,
    }) => 
    {
    try{
        const {status,data} = await axios.post("/api/auth/signup",{
            name : username,
            email,
            password,
    })
        if(status === 201){
            localStorage.setItem('loginDetails',JSON.stringify({
                token : data.encodedToken,
                user : data.createdUser,
            }));
            setToken(data.encodedToken);
            setUser(data.createdUser);
        }
    }
    catch(error){
        console.log(error);
    }
}

    const logInHandler = async(email="adarshbalika@gmail.com",password="adarshbalika") => {
        try{
            const {status,data} = await axios.post("/api/auth/login",{
                email,
                password,
            });
            console.log(status,data);
            if(status === 201 || status === 200){
                localStorage.setItem('loginDetails',JSON.stringify({
                    token : data.encodedToken,
                    user : data.createdUser,
                }));
                setToken(data.encodedToken);
                setUser(data.createdUser);
            }
        }
        catch(error){
            console.log(error);
        }
    }
    return(
        <AuthContext.Provider value={{signUpHandler,token,user,logInHandler}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);