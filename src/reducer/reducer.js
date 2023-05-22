
export const reducer = (state,action) => {
    switch(action.type){
        case "Initialization":{
            return{
                ...state,
                productList : action.payload,
                isLoading : false,    
            }
        }
        
        case "FilterCategory":{

            console.log(action.payload)
            
            const isCategoryPresent = state.checkboxesForCategory.find(item => item === action.payload);

            const checkbox = isCategoryPresent ? state.checkboxesForCategory.filter((item) => item !== action.payload) : [...state.checkboxesForCategory,action.payload];

            return{
                ...state,
                checkboxesForCategory : checkbox,
            }
        }

        case "FilterPrice":{         
            return{
                ...state,
                sortByPrice : action.payload,
            }
        }

        case "FilterRating":{
           
            return{
                ...state,
                sortByStar : action.payload,
            }
        }

        case "FilterSlider":{
    
            return{
                ...state,
                sliderValue : action.payload,
            }
        }

        case "Search":{

            return{
                ...state,
                searchText : action.payload,
            }
        }

        case "ClearFilters":{
            return{
                ...state,
                checkboxesForCategory : [],
                sortByPrice : null,
                sortByStar : null,
                sliderValue : 30000,
                searchText : "",
            }
        }

        case "CartDetails":{
            return{
                ...state,
                cartList : action.payload
            }
        }

        case "AddToCart":{
            return{
                ...state,
                cartList : action.payload
            }
        }

        case "DeleteFromCart":{
            return{
                ...state,
                cartList : action.payload
            }
        }

        case "UpdateCart":{
            return{
                ...state,
                cartList : action.payload
            }
        }

        case "AddToWishList":{
            return{
                ...state,
                wishList : action.payload
            }
        }

        case "DeleteFromWishList":{
            return{
                ...state,
                wishList:action.payload
            }
        }

        case "ShowDetails":{
            return{
                ...state,
                individualProduct : action.payload
            }
        }
        default:
    }
}