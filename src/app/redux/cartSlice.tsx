import { createSlice, PayloadAction } from "@reduxjs/toolkit";



const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart:[]
    },
    reducers: {
        addToCart:(state,action: PayloadAction<any>)=>{
            state.cart.push(action.payload)
        },
        removeItemFromCart: (state, action: PayloadAction<number>) => {
            state.cart = state.cart.filter(item => item.id !== action.payload);
          },
    }
})

export default cartSlice.reducer
export const {addToCart} = cartSlice.actions