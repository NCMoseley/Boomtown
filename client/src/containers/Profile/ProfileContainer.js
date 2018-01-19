import React, { Component } from "react";
import PropTypes from "prop-types";
import Profile from "./Profile";
import { connect } from "react-redux";
import { fetchItemsAndUser } from "../../redux/modules/profile";

class ProfileContainer extends Component {
  static propTypes = {};

  componentDidMount() {
    this.props.dispatch(fetchItemsAndUser(this.props.match.params.userid));
  }
  render() {
    if (this.props.isLoading) return <p> Loading Profile </p>;
    return <Profile items={this.props.items} />;
  }
}

ProfileContainer.propTypes = {
  items: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  // isLoading: state.profile.isLoading,
  items: state.profile.items,
  error: state.profile.error
});

export default connect(mapStateToProps)(ProfileContainer);
