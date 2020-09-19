import React, { Fragment } from "react";
import Form from "./Form";
import Movies from "./Movies";

export default function Dashboard() {
  return (
    <Fragment>
      <Form />
      <Movies />
    </Fragment>
  );
}
