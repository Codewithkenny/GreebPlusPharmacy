import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./CheckoutSummary.css";

const CheckoutSummary = () => {
    const { cartItems } = useSelector((state) => state.cart);
    const navigate = useNavigate();

    const calculateTotals = () => {
        let totalQuantity = 0;
        let totalAmount = 0;

        cartItems.forEach((item) => {
            if (!isNaN(item.cartQuantity) && !isNaN(item.price)) {
                totalQuantity += item.cartQuantity;
                totalAmount += item.price * item.cartQuantity;
            }
        });

        return { totalQuantity, totalAmount };
    };

    const { totalQuantity, totalAmount } = calculateTotals();

    return (
        <div className="checkout-summary">
            <h2 className="summary-title">Checkout Summary</h2>
            {cartItems.map((item) => (
                <div key={item._id} className="cart-item">
                    <div className="cart-item-details">
                        <p className="item-name">{item.name}</p>
                        <p className="item-quantity">Quantity: {item.cartQuantity}</p>
                        <p className="item-price">Price: ₦{item.price}</p>
                    </div>
                </div>
            ))}
            <div className="summary">
                <p className="total-quantity">Total Quantity: {totalQuantity}</p>
                <p className="total-amount">Total Amount: ₦{totalAmount.toFixed(2)}</p>
            </div>
            <button className="checkout-button" onClick={() => navigate("/payment", { state: { totalAmount } })}>
                Proceed to Payment
            </button>
        </div>
    );
};

export default CheckoutSummary;
