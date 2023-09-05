import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Checkout.css';

const Checkout = () => {
    
    const { cartItems } = useSelector((state) => state.cart);

    const calculateTotalAmount = () => {
        let totalAmount = 0;
        cartItems.forEach((item) => {
            totalAmount += item.price * item.cartQuantity;
        });
        return totalAmount;
    };
   ;
    if (cartItems.length === 0) {
        console.log('Cart is empty:', cartItems);
        return (
            <div className="checkout-container">
                <h2 className='text-dark'>Your cart is empty</h2>
                <Link to="/products" className="checkout-button">
                    Continue Shopping
                </Link>
            </div>
        );
    }

    return (
        <div className="checkout-container">
            <h2 className='text-center text-dark'>Checkout</h2>
            <div className="checkout-items">
                {cartItems.map((item) => (
                    <div key={item._id} className="checkout-item">
                        <p className='text-dark'>{item.name}</p>
                        <p className='text-dark'>Quantity: {item.cartQuantity}</p>
                        <p className='text-dark'>Price: ₦{item.price * item.cartQuantity}</p>
                    </div>
                ))}
            </div>

            <div className="total-amount">
                Total Amount: ₦{calculateTotalAmount()}
            </div>
            <Link to="/checkoutsummary" className="checkout-link">
                View Summary
            </Link>
        </div>
    );
};

export default Checkout;
