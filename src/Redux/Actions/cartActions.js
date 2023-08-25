import { createAction } from "@reduxjs/toolkit";

export const addToCart = createAction("cart/addToCart");
export const removeFromCart = createAction("cart/removeFromCart");
export const decreaseCartItemQuantity = createAction(
  "cart/decreaseCartItemQuantity"
);
export const increaseCartItemQuantity = createAction(
  "cart/increaseCartItemQuantity"
);
