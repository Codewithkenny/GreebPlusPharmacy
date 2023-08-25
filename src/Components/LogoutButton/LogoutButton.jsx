import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { LogoutUserAsync } from '../../Components/LogoutUserAsync/LogoutUserAsync';
import { useNavigate } from 'react-router-dom';

const LogoutButton = ({ onLogout }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = async () => {
        dispatch(LogoutUserAsync());
        onLogout(); // Call the onLogout function passed from the Navbar component
        navigate('/'); // Navigate to the home page or another appropriate page
    };

    return (
        <button className="custom-user-button" onClick={handleLogout}>
            <FontAwesomeIcon icon={faSignOutAlt} />
        </button>
    );
};

export default LogoutButton;
