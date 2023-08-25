import React from "react";
import { useSelector } from "react-redux";

const UserProfile = () => {
    const user = useSelector((state) => state.user);

    return (
        <div>
            <h2>Welcome, {user.firstName}!</h2>
            <p>Email: {user.email}</p>
        </div>
    );
};

export default UserProfile;
