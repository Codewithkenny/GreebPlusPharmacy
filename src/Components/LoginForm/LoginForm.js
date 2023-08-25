import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUserAsync } from "../LoginUserAsync/LoginUserAsync";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = ({ onSuccess, closePopover }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validateForm = () => {
    // Check if email and password are not empty
    if (email.trim() === "" || password.trim() === "") {
      return false;
    }
    return true;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Dispatch loginUserAsync action
      dispatch(loginUserAsync(email, password));

      // For now, we assume that the login was successful for demonstration purposes
      const loginSuccessful = true;
      onSuccess(); // Close the popover

      if (loginSuccessful) {
        onSuccess(); // Close the popover
        // Optionally, you can navigate here as well
        navigate("/customer-dashboard");
      }
    }
  };

  return (
    <div className="login-form-container">
      <form>
        {/* Email input */}
        <div className="form-outline mb-4">
          <input
            type="email"
            id="form2Example1"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="form-label" htmlFor="form2Example1">
            Email address
          </label>
        </div>

        {/* Password input */}
        <div className="form-outline mb-4">
          <input
            type="password"
            id="form2Example2"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label className="form-label" htmlFor="form2Example2">
            Password
          </label>
        </div>

        <button
          type="button"
          className="btn btn-primary btn-block mb-4"
          onClick={handleLogin}
        >
          Sign in
        </button>
      </form>

      <div className="text-center">
        <p>
          New customer? <Link to="/register" onClick={closePopover}>Create your account</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
