import React, { Component, Fragment } from "react";
import Form from "./Form";
import Movies_List from "./Movies_List";

export default class Movies extends Component {
  render() {
    return (
      <Fragment>
        <Form />
        <Movies_List />
      </Fragment>
    );
  }
}
