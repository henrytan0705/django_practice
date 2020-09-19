import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getMovies } from "../../actions/movies_actions";

export class Movies extends Component {
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
            <tr>
              <td>Title</td>
              <td> </td>
              <td>Year</td>
              <td>Stock</td>
              <td>Price</td>
            </tr>
            {this.props.movies.map(movie => (
              <tr key={movie.id}>
                <td>{movie.title}</td>
                <td> - </td>
                <td>{movie.release_year}</td>
                <td>{movie.number_in_stock}</td>
                <td>{movie.daily_rate}</td>
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
)(Movies);
