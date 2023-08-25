import React from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../Redux/Actions/authActions";

const UserNavbar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div>
      <p>Hello, User!</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserNavbar;
