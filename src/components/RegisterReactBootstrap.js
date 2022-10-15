import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import app from "../firebase/firebase.init";

const auth = getAuth(app);

const RegisterReactBootstrap = () => {
  const [passwordError, setPasswordError] = useState("");
  const [success, setSuccess] = useState(false);
  const handleRegister = (event) => {
    event.preventDefault();
    setSuccess(false);

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    if (!/(?=.*[A-Z].*[A-z])/.test(password)) {
      setPasswordError("Please provide at least two uppercase");
      return;
    }
    if (password.length < 6) {
      setPasswordError("Please should be at least six characters");
      return;
    }
    if(!/(?=.*[!@#$&*])/.test(password)) {
        setPasswordError('Please add at least on special character');
        return;
    }
    setPasswordError('');

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setSuccess(true);
        form.reset()
      })
      .catch((error) => {
        console.error("error", error);
        setPasswordError(error.message)
      });
  };

  return (
    <div className="w-50 mx-auto">
      <h3 className="text-primary">Please Register</h3>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <p className="text-danger">{passwordError}</p>
        {success && <h5 className="text-success">User Created Successfully.</h5>}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <p><small>Already have an account? Please <Link to='/login'>Login</Link></small></p>
    </div>
  );
};

export default RegisterReactBootstrap;
