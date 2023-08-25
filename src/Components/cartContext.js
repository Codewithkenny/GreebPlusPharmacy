import { createContext, useContext, useReducer, useEffect } from "react";

// Define the cart reducer function
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
        cartTotalQuantity: state.cartTotalQuantity + 1,
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item._id !== action.payload._id
        ),
        cartTotalQuantity: state.cartTotalQuantity - 1,
      };
    case "CLEAR_CART":
      return {
        ...state,
        cartItems: [],
        cartTotalQuantity: 0,
      };
    default:
      return state;
  }
};

// Create the initial cart state
const initialCartState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

// Create the CartContext
const CartContext = createContext();

// CartProvider component to wrap the application and provide the cart state and actions
const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, initialCartState);

  // Save cart items to localStorage whenever cartState changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartState.cartItems));
  }, [cartState]);

  return (
    <CartContext.Provider value={{ cartState, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to access the cart context
const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};


export { CartProvider, useCart, CartContext }; 
