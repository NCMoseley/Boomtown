import React from "react";
import PropTypes from "prop-types";
import HeaderBar from "../HeaderBar";
import Footer from "../../containers/Footer";
import { connect } from "react-redux";
import { userLoading } from "../../redux/modules/auth";
import Gif from "../../images/cloud_load.gif";
import { withRouter } from "react-router";

const Layout = ({ children, userLoading, authenticated }) =>
  userLoading ? (
    <img
      alt={"Loading-gif"}
      style={{ width: "100%", filter: "brightness(150%)" }}
      src={Gif}
    />
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

export default withRouter(connect(mapStateToProps)(Layout));
