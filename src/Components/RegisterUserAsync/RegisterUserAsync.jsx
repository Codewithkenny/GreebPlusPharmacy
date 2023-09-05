import axios from "axios";

// Store the registration token in local storage
const setRegistrationToken = (token) => {
  localStorage.setItem("registrationToken", token);
};

export const registerUserAsync = (firstName, lastName, email, phoneNumber, password) => async (dispatch) => {
  dispatch({ type: "REGISTER_START" });

  try {
  
    // Use Axios to make the API call for user registration
    const response = await axios.post("http://localhost:5000/api/register", { firstName, lastName, email, phoneNumber, password });
    console.log("Registration response:", response.data);
    const registrationToken = response.data.registrationToken;
    setRegistrationToken(registrationToken); // Store the registration token in local storage

    if (response.status === 201) {
      const userData = response.data;
      dispatch({ type: "REGISTER_SUCCESS", payload: userData });
    } else {
      const errorData = response.data;
      dispatch({ type: "REGISTER_ERROR", payload: errorData.message });
    }
  } catch (error) {
    dispatch({ type: "REGISTER_ERROR", payload: "An error occurred" });
  }
};
