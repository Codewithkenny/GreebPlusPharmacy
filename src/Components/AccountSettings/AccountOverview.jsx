import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserAsync } from "../../Redux/Actions/userActions"; // Create this action to fetch user data

const AccountOverview = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user); // Assuming you have a 'user' reducer
    

    useEffect(() => {
        dispatch(fetchUserAsync()); // Dispatch action to fetch user data when the component mounts
    }, [dispatch]);

    return (
        <div className="account-overview-container">
            <h2>Account Overview</h2>
            <div className="user-info">
                <p>
                    <strong>First Name:</strong> {user.firstName}
                </p>
                <p>
                    <strong>Last Name:</strong> {user.lastName}
                </p>
                <p>
                    <strong>Email:</strong> {user.email}
                </p>
                <p>
                    <strong>Home Address:</strong> {user.homeAddress}
                </p>
            </div>
        </div>
    );
};

export default AccountOverview;
