// // features/productSlice.jsx

// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   items: [], // Sepet öğelerinin başlangıç durumu
//   status: null
// };

// const productSlice = createSlice({
//   name: "products",
//   initialState,
//   reducers: {
//     // Sepete öğe eklemek için eylem
//     addToBasket: (state, action) => {
//       state.items.push(action.payload);
//     },
//     // Sepetten öğe çıkarmak için eylem
//     removeFromBasket: (state, action) => {
//       state.items = state.items.filter(item => item.id !== action.payload.id);
//     },
//     // Sepeti sıfırlamak için eylem
//     clearBasket: (state) => {
//       state.items = [];
//     },
//   },
// });

// export const { addToBasket, removeFromBasket, clearBasket } = productSlice.actions;

// export default productSlice.reducer;


// features/productSlice.jsx

import { createSlice, createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  status: null,
  
};

export const productsFetch = createAsyncThunk(
  "products/productsFetch",
  async () => {
   
      const response = await axios.get("http://localhost:3000/products");
      return response.data;
    
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(productsFetch.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(productsFetch.fulfilled, (state, action) => {
        state.status = "success";
        state.items = action.payload;
      })
      .addCase(productsFetch.rejected, (state, action) => {
        state.status = "failed";
       
      });
  }
});

export default productSlice.reducer;
