import React from 'react';
import { Link } from 'react-router-dom';
import UserProfile from "../../Components/UserProfile/UserProfile"
import './CustomerDashboard.css';

const CustomerDashboard = () => {
    return (
        <div className="dashboard-container">
            <UserProfile />
            <div className="dashboard-links">
                <Link to="/orders" className="dashboard-link">
                    View Order History
                </Link>
                <Link to="/account-settings" className="dashboard-link">
                    Account Settings
                </Link>
            </div>
        </div>
    );
};

export default CustomerDashboard;
