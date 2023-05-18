
import { createContext,useContext,useState,useEffect } from "react";
import axios from "axios";

export const CategoryContext = createContext(null);

export const CategoryProvider = ({children}) => {

    const [category , setCategory] = useState([]);

    useEffect(() => {
        getCategory()
    })

    const getCategory = async() => {
        try{
            const {data} = await axios.get("/api/categories");
            setCategory(data.categories);
        }
        catch(error){
            console.log(error);
        }
    }
    return(
        <CategoryContext.Provider value={{category}}>
            {children}
        </CategoryContext.Provider>
    )
};

export const useCategory = () => useContext(CategoryContext);