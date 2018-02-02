import React from "react";
import PropTypes from "prop-types";
import HeaderBar from "../HeaderBar";
import Footer from "../../containers/Footer";
import { connect } from "react-redux";
import { userLoading } from "../../redux/modules/auth";
// import { start } from "repl";

const Layout = ({ children, userLoading, authenticated }) =>
  userLoading ? (
    <div>"Loading...."</div>
  ) : (
    <div className="appContentWrapper">
      <div className="appHeader">{authenticated && <HeaderBar />}</div>
      <div className="appContent">{children}</div>
      <div className="appFooter">{authenticated && <Footer />}</div>
    </div>
  );

Layout.defaultProps = {
  children: null
};

Layout.propTypes = {
  children: PropTypes.node
};

const mapStateToProps = state => ({
  userLoading: state.userLoading,
  authenticated: state.auth.authenticated
});

export default connect(mapStateToProps)(Layout);
