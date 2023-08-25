import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
  },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find((i) => i._id === item._id);
      if (existingItem) {
        existingItem.cartQuantity++;
      } else {
        state.cartItems.push({ ...item, cartQuantity: 1 });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== productId
      );
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    
    decreaseCartItemQuantity: (state, action) => {
      const productId = action.payload;
      const item = state.cartItems.find((i) => i._id === productId);
      if (item && item.cartQuantity > 1) {
        item.cartQuantity--;
      }
    },
    increaseCartItemQuantity: (state, action) => {
      const productId = action.payload;
      const item = state.cartItems.find((i) => i._id === productId);
      if (item) {
        item.cartQuantity++;
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  decreaseCartItemQuantity,
  increaseCartItemQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
