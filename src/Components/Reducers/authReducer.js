const initialState = {
  token: localStorage.getItem("token") || null,
  user: null,
  loading: false,
  error: null,
  isAuthenticated: false, 
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return { ...state, loading: true, error: null };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        loading: false,
        token: action.payload.token,
        user: action.payload.user,
        isAuthenticated: true, 
      };
    case "LOGIN_ERROR":
      return { ...state, loading: false, error: action.payload };
    case "LOGOUT":
      return { ...state, token: null, user: null };
    default:
      return state;
  }
};

export default authReducer;
