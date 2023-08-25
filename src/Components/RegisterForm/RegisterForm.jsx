import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUserAsync } from "../RegisterUserAsync/RegisterUserAsync";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const dispatch = useDispatch();
    const registrationError = useSelector(state => state.auth.error);
    const navigate = useNavigate();

    const validateForm = () => {
        const newErrors = {};
        if (!firstName) newErrors.firstName = "First name is required";
        if (!lastName) newErrors.lastName = "Last name is required";
        if (!email) newErrors.email = "Email is required";
        if (!phoneNumber) newErrors.phoneNumber = "Phone number is required";
        if (!password) newErrors.password = "Password is required";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Dispatch registerUserAsync action
            dispatch(registerUserAsync(firstName, lastName, email, phoneNumber, password));

            // After dispatch, navigate if registration was successful
            navigate("/");
        }
    };

    return (
        <div className="register-form-container text-center">
            <h2 className="form-title text-dark mt-3 py-2">Create Your Account</h2>
            <p className="text-dark">Please fill in the information below :</p>
            {registrationError && <p className="error-message">{registrationError}</p>}
            <form className="form-main text-center" onSubmit={handleRegister}>
                <div className="row mb-4">
                    <div className="col">
                        <div className="form-outline mb-4 text-center">
                            <label className="form-label" htmlFor="firstName">
                                First Name
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                className="form-control"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                style={{ width: "30%" }}
                            />
                          
                            {errors.firstName && <p className="error-message">{errors.firstName}</p>}
                        </div>
                    </div>
                    <div className="form-outline mb-4 text-center">
                        <label className="form-label" htmlFor="lastName">
                            Last Name
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            className="form-control"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            style={{ width: "30%" }}
                        />
                       
                        {errors.lastName && <p className="error-message">{errors.lastName}</p>}
                    </div>
                </div>

                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="email">
                        Email address
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{ width: "30%" }}
                    />
                   
                    {errors.email && <p className="error-message">{errors.email}</p>}
                </div>

                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="phoneNumber">
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        id="phoneNumber"
                        className="form-control"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        style={{ width: "30%" }}
                    />
                   
                    {errors.phoneNumber && <p className="error-message">{errors.phoneNumber}</p>}
                </div>

                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="password">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ width: "30%" }}
                    />
                   
                    {errors.password && <p className="error-message">{errors.password}</p>}
                </div>

                {/* Submit button */}
                <div className="text-center">
                    <button type="submit" className="btn btn-primary btn-block" style={{ width: "30%" }}>
                        Sign up
                    </button>
                </div>
            </form>
        </div>
    );
};

export default RegisterForm;
