import React, { useState } from "react";

const AuthCtx = React.createContext({
  userMail: "",
  isLoggedIn: false,
  token: "",
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const userEmail = localStorage.getItem("userMail");
  const [mail, setMail] = useState(userEmail);

  const [token, setToken] = useState(initialToken);

  const isUserLoggedIn = !!token;

  const loginHandler = (token, mail) => {
    setToken(token);
    setMail(mail);
    localStorage.setItem("token", token);
    localStorage.setItem("userMail", mail);
    console.log("email added");
    console.log(localStorage.getItem("userMail"));
  };

  const logoutHandler = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  const contextValue = {
    isLoggedIn: isUserLoggedIn,
    token: localStorage.getItem("token"),
    login: loginHandler,
    logout: logoutHandler,
    userMail: localStorage.getItem("userMail"),
  };

  return (
    <AuthCtx.Provider value={contextValue}>{props.children}</AuthCtx.Provider>
  );
};

export default AuthCtx;
