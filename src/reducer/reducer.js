
export const reducer = (state,action) => {
    switch(action.type){
        case "Initialization":{
            return{
                ...state,
                productList : action.payload
            }
        }
        default:
    }
}