import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialLogin from "./SocialLogin";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  if (user) {
    navigate("/home");
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };


  return (
    <div className="container w-50 mx-auto m-5">
      <h2 className="text-primary text-center ">Please Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Button variant="primary w-50 d-block mx-auto mb-3" type="submit">
          Login
        </Button>
      </Form>
      <p>
        New To Showaround Travel Guide ?
        <Link
          to="/signup"
          className="text-primary text-decoration-none"
        >
          Please Register
        </Link>
      </p>
      <p>
        Forget Password ?
        <button className="btn btn-link text-primary text-decoration-none">
          Reset Password
        </button>
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
