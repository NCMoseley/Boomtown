import React from "react";
import PropTypes from "prop-types";
import RaisedButton from "material-ui/RaisedButton";
import Paper from "material-ui/Paper";
import ValidatedTextField from "../../components/ValidatedTextField";
// import "./styles.css";
import logo from "../../images/boomtown-logo.svg";
import bottomLeft from "../../images/home-bl.svg";
import topRight from "../../images/home-tr.svg";

const Login = ({
  login,
  handleEmail,
  handlePassword,
  emailInputValue,
  passwordInputValue,
  loginError
}) => (
  <div className="page login">
    <div className="logo">
      <img src={logo} alt="Boomtown Logo" />
    </div>
    <div className="topRight">
      <img src={topRight} alt="Sky" />
    </div>
    <div className="bottomLeft">
      <img src={bottomLeft} alt="City" />
    </div>
    <div className="cardContainer">
      <Paper zDepth={5}>
        <div className="formContainer">
          <form
            className="form"
            onSubmit={e => {
              e.preventDefault();
              login();
            }}
            autoComplete="on"
          >
            <div>
              <ValidatedTextField
                handleChange={handleEmail}
                value={emailInputValue}
                label="Email"
                type="email"
              />
            </div>
            <div>
              <ValidatedTextField
                handleChange={handlePassword}
                value={passwordInputValue}
                label="Password"
                type="password"
                style={{}}
              />
            </div>
            <RaisedButton
              className="enterButton"
              primary
              fullWidth
              type="submit"
            >
              Login
            </RaisedButton>
          </form>
        </div>
      </Paper>
    </div>
  </div>
);

Login.propTypes = {
  login: PropTypes.func.isRequired
};

export default Login;
