import axios from "axios";

export const fetchUserAsync = () => async (dispatch) => {
  try {
    const response = await axios.get("/api/account"); 
    dispatch({ type: "FETCH_USER_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "FETCH_USER_ERROR", payload: error.message });
  }
};
