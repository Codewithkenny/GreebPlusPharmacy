import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FiUser, FiShoppingBag, FiMapPin, FiLogOut } from 'react-icons/fi'; // Import icons
import './AccountSettings.css';

const AccountSettings = () => {
    return (
        <div className="account-settings-container">
            <div className="sidebar">
                <h2>Account Settings</h2>
                <ul>
                    <li>
                        <Link to="/account-overview" className="sidebar-link">
                            <FiUser className="sidebar-icon" />
                            Account
                        </Link>
                    </li>
                    <li>
                        <Link to="orders" className="sidebar-link">
                            <FiShoppingBag className="sidebar-icon" />
                            Orders
                        </Link>
                    </li>
                    <li>
                        <Link to="address-book" className="sidebar-link">
                            <FiMapPin className="sidebar-icon" />
                            Address Book
                        </Link>
                    </li>
                    <li>
                        <Link to="/logout" className="sidebar-link">
                            <FiLogOut className="sidebar-icon" />
                            Logout
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="content">
                <Outlet />
            </div>
        </div>
    );
};

export default AccountSettings;
