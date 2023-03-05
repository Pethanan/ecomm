import React from "react";
import { useRef, useState } from "react";
import { Container } from "react-bootstrap";
import { Route } from "react-router-dom";
import ProductsStore from "./ProductsStore";

const Login = () => {
  const [isLoginSuccess, setIsLoginSuccess] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();

  const loginSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      const enteredEmail = emailRef.current.value;
      const enteredPassword = passwordRef.current.value;

      await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDVg383Q9Obw_imsQzsLRUj65bQVspoXJg",
        {
          method: "POST",
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      //assuming successfull login
      setIsLoginSuccess(true);
    } catch (err) {
      console.log("Authentication failed");
    }
  };

  return (
    <>
      {!isLoginSuccess && (
        <Container>
          {!isLoginSuccess && (
            <div>
              <form onSubmit={loginSubmitHandler}>
                <h1>Welcome Back</h1>
                <label>Email ID/User ID</label>
                <br /> <br />
                <input type="email" ref={emailRef}></input>
                <br /> <br />
                <label>Password</label>
                <br /> <br />
                <input type="password" ref={passwordRef}></input>
                <br /> <br />
                <button type="submit">Login</button>
                <br /> <br />
              </form>
            </div>
          )}
        </Container>
      )}
      {isLoginSuccess && <ProductsStore></ProductsStore>}
    </>
  );
};

export default Login;
