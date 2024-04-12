import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
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
                state.cartItems[itemIndex].cartQuantity = 1

            };

            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))

        },
        removeFromCart(state, action) {
        
            if (action.payload && action.payload.id) {
                const nextCartItems = state.cartItems.filter((cartItem) => cartItem.id !== action.payload.id)
                state.cartItems = nextCartItems;
                localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
            } else {
                console.error("Invalid payload for removeFromCart action:", action.payload);
            }
        },
        clearCart(state, action) {
            state.cartItems = [];
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
            state.cartTotalQuantity = 0;
            state.cartTotalAmount = 0;
        },

        getTotals(state, action) {
            let { total, quantity } = state.cartItems.reduce((cartTotal, cartItem) => {
                const { newPrice, cartQuantity } = cartItem;
                console.log("price:", newPrice, "cartQuantity:", cartQuantity);
                const itemTotal = newPrice * cartQuantity;
        
                cartTotal.total += itemTotal
                cartTotal.quantity += cartQuantity
        
                return cartTotal;
        
            }, {
                total: 0,
                quantity: 0,
            });
        
            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total;
        }

    }


});

export const { addToCart, decreaseCart, removeFromCart, clearCart, getTotals } = cartSlice.actions;

export default cartSlice.reducer;