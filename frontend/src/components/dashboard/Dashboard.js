import React, { Fragment } from "react";
// import Form from "./movies_section/Form";
// import Movies from "./movies_section/Movies";
import MoviesSection from "./section_one/Movies_Section";
import Section_Two from "./section_two/Section_Two";

export default function Dashboard() {
  return (
    <Fragment>
      <MoviesSection />

      <Section_Two />
      <Section_Two />
      <Section_Two />
    </Fragment>
  );
}
