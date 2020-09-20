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
        <h2>Movies</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Year</th>
              <th>Price</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.movies.map(movie => (
              <tr key={movie.id}>
                <td>{movie.id}</td>
                <td>{movie.title}</td>
                <td>{movie.release_year}</td>
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
