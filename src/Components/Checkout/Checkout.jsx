import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useCart } from '../cartContext';
import { Link } from 'react-router-dom';
import './Checkout.css';

const Checkout = () => {
    const { cartItems } = useSelector((state) => state.cart);
    const { cartState, dispatch } = useCart();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const calculateTotalAmount = () => {
        let totalAmount = 0;
        cartItems.forEach((item) => {
            totalAmount += item.price * item.cartQuantity;
        });
        return totalAmount;
    };

    const handleCheckout = async () => {
        try {
            setLoading(true);
            const totalAmount = calculateTotalAmount();
            const orderData = {
                cartItems,
                totalAmount,
            };

            const response = await fetch('http://localhost:5000/api/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
                body: JSON.stringify(orderData),
            });

            if (response.ok) {
                // Clear the cart and redirect to thank you page
                dispatch({ type: 'CLEAR_CART' });
                navigate.push('/thank-you');
            } else {
                console.error('Checkout failed.');
            }
        } catch (error) {
            console.error('Error during checkout:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="checkout-container">
            <h2>Checkout</h2>
            <div className="checkout-items">
                {cartItems.map((item) => (
                    <div key={item._id} className="checkout-item">
                        <p>{item.name}</p>
                        <p>Quantity: {item.cartQuantity}</p>
                        <p>Price: ₦{item.price * item.cartQuantity}</p>
                    </div>
                ))}
            </div>
            <div className="total-amount">
                Total Amount: ₦{calculateTotalAmount()}
            </div>
            <Link to="/checkoutsummary" className="checkout-button">
                {loading ? 'Processing...' : 'Checkout'}
            </Link>
        </div>
    );
};

export default Checkout;
