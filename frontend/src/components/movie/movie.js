import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getMovies } from "../../actions/movies_actions";

export class Movie extends Component {
  static propTypes = {
    movies: PropTypes.array.isRequired
  };

  componentDidMount() {
    this.props.getMovies();
  }

  render() {
    return (
      <Fragment>
        <h1>Movies Available</h1>
        <table>
          <thead></thead>

          <tbody>
            {this.props.movies.map(movie => (
              <tr key={movie.id}>
                <td>{movie.id}</td>
                <td>{movie.title}</td>
                <td>{movie.stock}</td>
                <button>Button</button>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const msp = state => {
  return {
    movies: state.movies.movies
  };
};

export default connect(
  msp,
  { getMovies }
)(Movie);
