import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { PaystackButton } from 'react-paystack';
import './Payment.css';

const Payment = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { totalAmount } = location.state;

    const publicKey = 'pk_test_53f88c65e0f54aec8082d02322854b7a060ae6c0'; // Replace with your Paystack public key

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

    const config = {
        reference: new Date().getTime(),
        email: 'pojuagbomeji@gmail.com', // Replace with the customer's email
        amount: totalAmount * 100, // Paystack amount is in kobo (1 NGN = 100 kobo)
        publicKey,
        onClose: handlePaymentClose,
        onSuccess: handlePaymentSuccess,
    };

    return (
        <div className="payment-container">
            <h2>Payment</h2>
            <div className="payment-details">
                <p>Total Amount: ₦{totalAmount.toFixed(2)}</p>
            </div>
            <PaystackButton
                text={loading ? 'Processing...' : 'Pay Now'}
                className="pay-button"
                {...config}
            />
        </div>
    );
};

export default Payment;
