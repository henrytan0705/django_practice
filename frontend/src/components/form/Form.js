import React, { Component } from "react";

export class Form extends Component {
  state = {
    username: "",
    email: "",
    password: ""
  };

  onChange = e => this.setState({ [e.target.username]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    console.log("submit");
  };

  render() {
    const { username, email, password } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Login</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="name"
              onChange={this.onChange}
              value={username}
              placeholder="Username/Email"
            />
          </div>

          <div className="form-group">
            <input
              className="form-control"
              type="password"
              name="password"
              onChange={this.onChange}
              value={password}
              placeholder="Password"
            />
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Create Account
            </button>
          </div>

          <div>
            <p>
              Not a verified vendor? <a href="">Sign up</a>
            </p>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
