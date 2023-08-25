import axios from "axios"; 

export const loginUserAsync = (email, password) => async (dispatch) => {
  dispatch({ type: "LOGIN_START" });

  try {
    // Send a POST request to your backend's login route
    const response = await axios.post("/api/login", { email, password });

    // Dispatch LOGIN_SUCCESS action with user data from the response
    dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
  } catch (error) {
    // Dispatch LOGIN_ERROR action with the error message
    dispatch({ type: "LOGIN_ERROR", payload: error.message });
  }
};

// Other authentication-related action creators
export const logoutUser = () => ({
  type: "LOGOUT_USER",
});
