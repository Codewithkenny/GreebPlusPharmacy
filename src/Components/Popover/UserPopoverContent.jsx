// UserPopoverContent.js
import React from "react";
import LoginForm from "../LoginForm/LoginForm"; // Import your LoginForm component

const UserPopoverContent = ({ user, handleLogout, onSuccess }) => {
    return (
        <div>
            {user ? (
                <>
                    <h3>Welcome, {user.firstName}!</h3>
                    <button className="signout-button" onClick={handleLogout}>
                        Sign Out
                    </button>
                </>
            ) : (
                <>
                    <h3>Login to my account</h3>
                    <LoginForm onSuccess={onSuccess} /> 
                </>
            )}
        </div>
    );
};

export default UserPopoverContent;
