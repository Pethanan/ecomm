import React, { useContext } from "react";
import { useRef } from "react";
import { Container, Form } from "react-bootstrap";
import AuthCtx from "../../Store/auth-ctx";
import { Redirect } from "react-router-dom";
import { Button } from "react-bootstrap";

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
      <h2 style={{ textAlign: "center", margin: "60px", color: "#30827d" }}>
        Welcome Back !
      </h2>

      <Container style={{ width: "600px" }}>
        <Form onSubmit={loginSubmitHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{ fontWeight: "bold" }}>
              Email ID/User ID
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              ref={emailRef}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label style={{ fontWeight: "bold" }}>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              ref={passwordRef}
            />
          </Form.Group>

          <Button
            variant="success"
            type="submit"
            style={{ fontWeight: "bold" }}
          >
            Submit
          </Button>
        </Form>
      </Container>

      {ctx.isLoggedIn && <Redirect to="/Products" />}
    </>
  );
};

export default Login;
