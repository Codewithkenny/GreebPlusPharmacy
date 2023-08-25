import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const LogoutUserAsync = async ({ setToken }) => {
    try {
        // Get the token from local storage
        const token = localStorage.getItem("authToken");

        // Clear the token from localStorage
        localStorage.removeItem("authToken");

        // Optionally, you can also make a request to the server to clear the cookie
        await axios.post("http://localhost:5000/logout", null, {
            headers: {
                Authorization: `Bearer ${token}` // Include the token in the Authorization header
            }
        });

        setToken(null); // Clear the token from state
        // Perform any additional logout actions
    } catch (error) {
        console.error("Logout error:", error);
        // Show a toast notification with the error message
        toast.error("An error occurred during logout. Please try again.");
    }
};
