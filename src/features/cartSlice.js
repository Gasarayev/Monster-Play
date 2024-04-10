import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cartItems: localStorage.getItem("cartItem") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
};


const cartSlice = createSlice({

    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id)

            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1

            } else {

                // const tempProduct = {...action.payload, cartQuantity: 1}
                const tempProduct = { ...action.payload, cartQuantity: 1 };
                state.cartItems.push(tempProduct)
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },

        decreaseCart(state, action) {


            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id)

            if (state.cartItems[itemIndex].cartQuantity > 1) {
                state.cartItems[itemIndex].cartQuantity -= 1


            } else if (state.cartItems[itemIndex].cartQuantity <= 1) {
                state.cartItems[itemIndex].cartQuantity === 1

            };

            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))


        }
    }


});

export const { addToCart, decreaseCart } = cartSlice.actions;

export default cartSlice.reducer;