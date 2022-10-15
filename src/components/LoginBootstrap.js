import React from "react";
import { Link } from "react-router-dom";

const LoginBootstrap = () => {
    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email;
        const password = form.password;
    }
  return (
    <div className="w-50 mx-auto">
      <h3 className="text-success">Please Login</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Your Email
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput2" className="form-label">
            Your Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="exampleFormControlInput2"
            placeholder="Your Password"
            required
          />
        </div>
        <button className="btn btn-primary" type="submit">
          login
        </button>
      </form>
      <p><small>New to this website? Please <Link to='/register'>Register</Link></small></p>
    </div>
  );
};

export default LoginBootstrap;
