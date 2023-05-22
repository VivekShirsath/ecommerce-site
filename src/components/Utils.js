

export const isItemInCart = (item,cartList) =>{
    return cartList?.find((product) => product._id === item._id)
 }

export const isItemInWishList = (item,wishList) => {
     return wishList?.find((product) => product._id === item._id)
 }