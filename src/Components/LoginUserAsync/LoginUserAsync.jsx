import axios from "axios";

const setToken = (token) => {
  localStorage.setItem("authToken", token);
};

export const loginUserAsync = (email, password) => async (dispatch) => {
  dispatch({ type: "LOGIN_START" });

  try {
    // Use Axios to make the API call for authentication
    const response = await axios.post("http://localhost:5000/api/login", { email, password });
    const token = response.data.token;
    setToken(token); // Store the token in local storage

    if (response.status === 200) {
      const userData = response.data;
      dispatch({ type: "LOGIN_SUCCESS", payload: userData });
    } else {
      const errorData = response.data;
      dispatch({ type: "LOGIN_ERROR", payload: errorData.message });
    }
  } catch (error) {
    let errorMessage = "An error occurred";
    if (error.response && error.response.data && error.response.data.message) {
      errorMessage = error.response.data.message;
    }
    dispatch({ type: "LOGIN_ERROR", payload: errorMessage });
  }
};
