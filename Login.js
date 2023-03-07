import React, { useContext } from "react";
import { useRef, useState } from "react";
import { Container } from "react-bootstrap";
import ProductsStore from "./ProductsStore";
import AuthCtx from "../../Store/auth-ctx";
import { Redirect } from "react-router-dom";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const ctx = useContext(AuthCtx);

  const loginSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      const enteredEmail = emailRef.current.value;

      const enteredPassword = passwordRef.current.value;

      const response = await fetch(
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
      const data = await response.json();
      console.log(data);
      const token = data.idToken;
      console.log("before callinglogin()");
      console.log(token);
      ctx.login(token, enteredEmail);

      //assuming successfull login
    } catch (err) {
      console.log("Authentication failed");
    }
  };

  return (
    <>
      <Container>
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
      </Container>

      {ctx.isLoggedIn && <Redirect to="/Products" />}
    </>
  );
};

export default Login;
