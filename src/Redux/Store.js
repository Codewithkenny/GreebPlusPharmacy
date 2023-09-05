import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../Components/Reducers/productsReducer";
import authReducer from "../Components/Reducers/authReducer";
import cartReducer from "../Components/Reducers/cartReducer";
import userReducer from "../Components/Reducers/userReducer";

const store = configureStore({
  reducer: {
    products: productsReducer,
    auth: authReducer,
    user: userReducer,
    cart: cartReducer,
  },

});

export default store;
