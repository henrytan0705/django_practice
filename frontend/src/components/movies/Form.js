import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addMovie } from "../../actions/movies_actions";

export class Form extends Component {
  state = {
    title: "",
    year: "",
    genre: "",
    price: "",
    stock: ""
  };

  static propTypes = {
    addMovie: PropTypes.func.isRequired
  };

  onChange = e => {
    const field = e.target.name;
    const keys = ["year", "price", "stock", "genre"];

    if (keys.includes(field)) {
      console.log(`${field} - value Converted to number`);
      this.setState({ [e.target.name]: Number(e.target.value) });
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };

  onSubmit = e => {
    e.preventDefault();
    const { title, year, genre, price, stock } = this.state;
    const movie = {
      title,
      release_year: year,
      genre,
      daily_rate: price,
      number_in_stock: stock
    };
    this.props.addMovie(movie);
    this.setState({
      title: "",
      year: "",
      genre: "",
      price: "",
      stock: ""
    });
  };

  render() {
    const { title, year, price, genre, stock } = this.state;

    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add Movie</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input
              className="form-control"
              type="text"
              name="title"
              onChange={this.onChange}
              value={title}
            />
          </div>
          <div className="form-group">
            <label>Year</label>
            <input
              className="form-control"
              type="number"
              name="year"
              onChange={this.onChange}
              value={year}
            />
          </div>
          <div className="form-group">
            <label>Genre</label>
            <select
              className="form-control"
              name="genre"
              onChange={this.onChange}
              value={genre}
            >
              <option value="" disabled>
                Select a genre
              </option>
              <option value="1">Action</option>
              <option value="2">Drama</option>
              <option value="3">Horror</option>
            </select>
          </div>
          <div className="form-group">
            <label>Price</label>
            <input
              className="form-control"
              type="number"
              name="price"
              onChange={this.onChange}
              value={price}
            />
          </div>
          <div className="form-group">
            <label>Stock</label>
            <input
              className="form-control"
              type="number"
              name="stock"
              onChange={this.onChange}
              value={stock}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { addMovie }
)(Form);
