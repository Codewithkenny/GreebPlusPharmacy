const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  homeAddress: "",
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
        homeAddress: action.payload.homeAddress,
        isAuthenticated: true,
      };
    case "LOGOUT":
      return {
        ...state,
        firstName: "",
        lastName: "",
        email: "",
        homeAddress: "",
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default userReducer;
