import React, { Component } from "react";

export class Form extends Component {
  state = {
    username: "",
    email: "",
    password: ""
  };

  render() {
    return (
      <div className="card card-body mt-4 mb-4">
        <h1>Login</h1>
        <form>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Username/Email"
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Create Account
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
