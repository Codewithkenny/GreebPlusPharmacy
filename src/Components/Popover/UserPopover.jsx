import React, { useState } from "react";
import { Link } from "react-router-dom";
import { OverlayTrigger, Popover } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import LoginForm from "../LoginForm/LoginForm";
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from "../../Redux/Actions/authActions";

const UserPopover = () => {
    const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const [popoverVisible, setPopoverVisible] = useState(false);

    const togglePopover = () => {
        setPopoverVisible(!popoverVisible);
    };

    const handleLogout = () => {
        dispatch(logoutUser());
        setPopoverVisible(false); // Close the popover after logout
    };

    // This function will be called after successful login
    const handleLoginSuccess = () => {
        setPopoverVisible(false); // Close the popover
    };
 

    return (
        <OverlayTrigger
            show={popoverVisible}
            trigger="click"
            placement="bottom"
            overlay={
                <Popover id="user-popover">
                    <Popover.Body>
                        {isAuthenticated ? (
                            <>
                                <h3>Welcome, {user.firstName}!</h3>
                                <button className="signout-button" onClick={handleLogout}>
                                    <FontAwesomeIcon icon={faSignOutAlt} />
                                    Sign Out
                                </button>
                            </>
                        ) : (
                                <>
                                    <h3 className="text-dark">Login to my account</h3>
                                    <p>Enter your email and password</p>
                                    <LoginForm onSuccess={handleLoginSuccess} closePopover={() => setPopoverVisible(false)} />
                                    <h5 className="text-dark">
                                        <span>New customer? <Link to="/register" onClick={togglePopover}>Create your account</Link></span>
                                    </h5>
                                </>
                        )}
                    </Popover.Body>
                </Popover>
            }
        >
            <button
                type="button"
                className="custom-user-button"
                onClick={togglePopover}
            >
                {isAuthenticated ? (
                    <span>Hello, {user.firstName}!</span>
                ) : (
                    <FontAwesomeIcon icon={faUser} />
                )}
            </button>
        </OverlayTrigger>
    );
};

export default UserPopover;
