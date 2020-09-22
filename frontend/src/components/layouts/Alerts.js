import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withAlert } from "react-alert";
import { connect } from "react-redux";

export class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired
  };

  componentDidUpdate(prevProps) {
    const { error, alert, message } = this.props;
    if (error !== prevProps.error) {
      if (error.message.title)
        alert.error(`Title: ${error.message.title.join()}`);
      if (error.message.release_year)
        alert.error(`Year: ${error.message.release_year.join()}`);
      if (error.message.genre)
        alert.error(`Genre: ${error.message.genre.join()}`);
      if (error.message.daily_rate)
        alert.error(`Price: ${error.message.daily_rate.join()}`);
      if (error.message.number_in_stock)
        alert.error(`Stock: ${error.message.number_in_stock.join()}`);
      if (error.message.non_field_errors)
        alert.error(error.message.non_field_errors.join());
    }

    if (message !== prevProps.message) {
      if (message.addMovie) alert.success(message.addMovie);
    }
  }

  render() {
    return <Fragment />;
  }
}

const msp = state => ({
  error: state.errors,
  message: state.messages
});

export default connect(msp)(withAlert()(Alerts));
