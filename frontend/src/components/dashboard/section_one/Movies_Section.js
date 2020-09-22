import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

export default class MoviesSection extends Component {
  render() {
    return (
      <Fragment>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Movies Section</h5>
            <p className="card-text">
              Check out the current movies list or add your own.
            </p>
            <Link className="btn btn-primary" to="/movies">
              BEGIN
            </Link>
          </div>
        </div>
      </Fragment>
    );
  }
}
