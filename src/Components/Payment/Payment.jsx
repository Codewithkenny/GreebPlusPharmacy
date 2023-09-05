import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'; 
import { PaystackButton } from 'react-paystack';
import './Payment.css';

const Payment = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { totalAmount } = location.state;

    // Retrieve the authenticated user's email from your state management library
    const authenticatedUser = useSelector((state) => state.auth.user);
    const customerEmail = authenticatedUser ? authenticatedUser.email : '';

    // Replace with your Paystack public key (store securely, not hard-coded)
    const publicKey = process.env.REACT_APP_PAYSTACK_PUBLIC_KEY;
    console.log(publicKey);



    const [loading, setLoading] = useState(false);

    const handlePaymentSuccess = (reference) => {
        // Handle successful payment (e.g., update order status, redirect, etc.)
        console.log('Payment successful:', reference);
        setLoading(false);

        // Redirect to the customer's dashboard
        navigate('/customer-dashboard');
    };

    const handlePaymentClose = () => {
        // Handle payment modal close
        console.log('Payment modal closed');
        setLoading(false);
    };

    const handleError = (error) => {
        // Handle payment error
        console.error('Payment error:', error);
        setLoading(false);
    };

    const config = {
        reference: new Date().getTime(),
        email: customerEmail, // Use the dynamic customer email
        amount: totalAmount * 100, // Paystack amount is in kobo (1 NGN = 100 kobo)
        publicKey,
        onClose: handlePaymentClose,
        onSuccess: handlePaymentSuccess,
        onError: handleError, // Handle payment errors
    };

    return (
        <div className="payment-container">
            <h2 className='text-dark text-center'>Payment</h2>
            <div className="payment-details">
                <p className='text-dark'>Total Amount: ₦{totalAmount.toFixed(2)}</p>
            </div>
            <div className="pay-button-container">
                <PaystackButton
                    text={loading ? 'Processing...' : 'Pay Now'}
                    className="pay-button"
                    {...config}
                />
            </div>
        </div>

    );
};

export default Payment;
