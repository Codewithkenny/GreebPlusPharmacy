import React from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import {  useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector, useDispatch } from "react-redux";
import {
    removeFromCart,
    decreaseCartItemQuantity,
    increaseCartItemQuantity,
} from "../../Components/Reducers/cartReducer";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
    const { cartItems } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRemoveFromCart = (productId) => {
        dispatch(removeFromCart(productId));
    };

    const handleDecreaseCartItemQuantity = (productId) => {
        dispatch(decreaseCartItemQuantity(productId));
    };

    const handleIncreaseCartItemQuantity = (productId) => {
        dispatch(increaseCartItemQuantity(productId));
    };

    const handleContinueShopping = () => {
        // Navigate to the product listing page or any other page you want
        navigate("/products"); // Update the path to the desired page
    };

    const renderCartItems = () => {
        if (cartItems.length === 0) {
            return (
                <div className="empty-cart">
                    <p>Your Cart is empty</p>
                    <Link to="/products">Continue Shopping</Link>
                </div>
            );
        }

        return cartItems.map((item) => (
            <div key={item._id} className="cart-item">
                <div className="cart-item-details">
                    <p>{item.name}</p>
                    <p>Price: ₦{item.price.toFixed(2)}</p>
                    <div className="quantity-selector">
                        <button
                            className="quantity-selector__button"
                            onClick={() => handleDecreaseCartItemQuantity(item._id)}
                        >
                            -
                        </button>
                        <span className="quantity">{item.cartQuantity}</span>
                        <button
                            className="quantity-selector__button"
                            onClick={() => handleIncreaseCartItemQuantity(item._id)}
                        >
                            +
                        </button>
                    </div>
                </div>
                <div className="cart-item-image-container">
                    <img src={item.imageUrl} alt={item.name} className="cart-item-image" />
                </div>
                <Link to="#" className="remove-link" onClick={() => handleRemoveFromCart(item._id)}>
                    <FontAwesomeIcon icon={faTrash} />
                    Remove
                </Link>
            </div>
        ));
    };

    return (
        <div className="cart-container">
            <h2 className="cart-heading">Shopping Cart</h2>
            {renderCartItems()}
            {cartItems.length > 0 && (
                <div className="cart-actions">
                    <Link to="/checkout" className="checkout-button">
                        Proceed to Checkout
                    </Link>
                    <Link to="/products" className="continue-shopping">
                        Continue Shopping
                    </Link>
                    
                    
                </div>
                
            )}
        </div>
    );
};

export default Cart;
