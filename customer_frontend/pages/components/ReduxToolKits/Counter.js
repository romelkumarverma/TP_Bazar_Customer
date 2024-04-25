import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    carts: [],
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        /// Add To Cart
        addToCart:(state,action) =>{
            console.log(action)
            const itemIndex = state.carts.findIndex((item)=> item.productId===action.payload.productId)
            console.log(itemIndex)

            if(itemIndex >= 0){
                state.carts[itemIndex].quantity +=1
            }else{
                const temp = {...action.payload, quantity: 1}
                state.carts = [...state.carts, temp]
            }
        },
        ///// Remove Paricular Items
        removeToCart:(state, action)=>{
            const data = state.carts.filter((ele)=>ele.productId !== action.payload )
            state.carts = data
        }, 
        ////////// Remove single Item
        removeSingleItem: (state, action)=>{
            const itemIndexDesc = state.carts.findIndex((item)=>item.productId === action.payload.productId )
            if(state.carts[itemIndexDesc].quantity >= 1){
                state.carts[itemIndexDesc].quantity -= 1
            }
        }
    },
})

export const {addToCart,  removeToCart, removeSingleItem} = counterSlice.actions
export default  counterSlice.reducer