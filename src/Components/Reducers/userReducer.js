const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  isAuthenticated: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
        phoneNumber: action.payload.phoneNumber,
        isAuthenticated: true,
      };
    case "LOGOUT":
      return {
        ...state,
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default userReducer;
