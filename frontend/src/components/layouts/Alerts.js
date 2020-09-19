import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withAlert } from "react-alert";
import { connect } from "react-redux";

export class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired
  };

  componentDidUpdate(prevProps) {
    const { error, alert } = this.props;

    if (error != prevProps.error) {
    }
  }

  render() {
    return <Fragment />;
  }
}

const msp = state => ({
  error: state.errors
});

export default connect(msp)(withAlert()(Alerts));
