import React, { Component } from "react";
import Share from "./Share";
import PropTypes from "prop-types";

export default class ShareContainer extends Component {
  render() {
    return <Share share={this.share} />;
  }
}
