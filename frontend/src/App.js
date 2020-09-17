import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import Movie from "./components/movie/movie";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <Movie />
        </Fragment>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
