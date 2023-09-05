import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthData = () => useContext(AuthContext);

export const AuthWrapper = ({ children }) => {
  const [user, setUser] = useState({ name: "", isAuthenticated: false });

  const login = (userName, password) => {
    // Perform authentication logic
    // ...
    setUser({ name: userName, isAuthenticated: true });
  };

  const logout = () => {
    setUser({ name: "", isAuthenticated: false });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
