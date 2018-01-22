import React, { Component } from "react";
import fourOfour from "../../images/404-gif-8.gif";

export default class NotFound extends Component {
  render() {
    return <img alt={"404-gif"} style={{ width: "100%" }} src={fourOfour} />;
  }
}
