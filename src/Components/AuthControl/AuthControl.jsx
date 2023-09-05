import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { LogoutUserAsync }  from '../../Components/LogoutUserAsync/LogoutUserAsync';
import  UserPopover  from '../../Components/Popover/UserPopover'; // Import your UserPopover component
import  CartPopover  from '../../Components/Popover/CartPopover'; // Import your CartPopover component
import  LogoutButton  from '../../Components/LogoutButton/LogoutButton'; // Import your LogoutButton component

const AuthControl = () => {
    const user = useSelector((state) => state.auth.user);
    const isAuthenticated = useSelector((state) => state.auth.isLoggedIn);
    const dispatch = useDispatch();

    const handleLogout = async () => {
        dispatch(LogoutUserAsync());
        // Perform UI changes after successful logout
        // For example, navigate to another page or update UI elements
    };

    return (
        <div className="auth-control">
            {isAuthenticated ? (
                <div className="auth-info">
                    <span className="user-greeting">Hello, {user.name}!</span>
                    <LogoutButton onClick={handleLogout} />
                    <CartPopover />
                </div>
            ) : (
                <div className="auth-info">
                    <UserPopover />
                    <CartPopover />
                </div>
            )}
        </div>
    );
};

export default AuthControl;
