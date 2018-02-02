import React, { Component } from "react";
import PropTypes from "prop-types";
import { firebaseAuth } from "../../config/firebaseConfig";

import Login from "./Login";

class LoginContainer extends Component {
  static propTypes = {};

  constructor() {
    super();
    this.state = {
      emailInputValue: "",
      passwordInputValue: "",
      loginError: { message: "" }
    };
  }
  handleEmail = e => {
    console.log(e.target.value);
    this.setState({ emailInputValue: e.target.value });
  };
  handlePassword = e => {
    console.log(e.target.value);
    this.setState({ passwordInputValue: e.target.value });
  };

  login = () => {
    if (this.state.emailInputValue && this.state.passwordInputValue) {
      firebaseAuth
        .signInWithEmailAndPassword(
          this.state.emailInputValue,
          this.state.passwordInputValue
        )
        .then(args => {
          console.log("Arrrrr", args);
          this.props.history.push("/profile/");
        })
        .catch(error => {
          console.log("Error", error);
          this.setState({ loginError: error });
        });
    }
  };

  render() {
    // const { from } = this.props.location.state || {
    //   from: { pathname: "/" }
    // };
    // return !this.props.authenticated ? (
    return (
      <Login
        login={this.login}
        handleEmail={this.handleEmail}
        handlePassword={this.handlePassword}
        emailInputValue={this.state.emailInputValue}
        passwordInputValue={this.state.passwordInputValue}
        loginError={this.state.loginError}
      />
    );
  }
}

export default LoginContainer;
