import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

export default class Section_Two extends Component {
  render() {
    return (
      <Fragment>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Section Two</h5>
            <p className="card-text">Other Forms</p>
            <Link className="btn btn-primary" to="/">
              BEGIN
            </Link>
          </div>
        </div>
      </Fragment>
    );
  }
}
