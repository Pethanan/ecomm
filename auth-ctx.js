import React, { useState } from "react";

const AuthCtx = React.createContext({
  isLoggedIn: false,
  token: "",
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);

  const isUserLoggedIn = !!token;

  const loginHandler = (token) => {
    localStorage.setItem("token", token);
    setToken(token);
  };

  const logoutHandler = () => {
    localStorage.removeItem("token", token);
    setToken(null);
  };

  const contextValue = {
    isLoggedIn: isUserLoggedIn,
    token: localStorage.getItem("token"),
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthCtx.Provider value={contextValue}>{props.children}</AuthCtx.Provider>
  );
};

export default AuthCtx;
