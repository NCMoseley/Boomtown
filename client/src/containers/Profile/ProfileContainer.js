import React, { Component } from "react";
import PropTypes from "prop-types";
import Items from "../Items/Items";
import Profile from "./Profile";
import { connect } from "react-redux";

import { fetchItemsAndUser } from "../../redux/modules/items";

const ITEMS_URL = "http://localhost:3001/items";
const ITEMS_USERS = "http://localhost:3001/users";

class ProfileContainer extends Component {
  static propTypes = {};

  componentDidMount() {
    this.props.dispatch(fetchItemsAndUser());
  }

  render() {
    if (this.props.isLoading) return <p> Loading </p>;
    return <Profile items={this.props.items} />;
  }
}

const mapStateToProps = state => ({
  isLoading: state.items.isLoading,
  items: state.items.items,
  error: state.items.error
});

export default connect(mapStateToProps)(ProfileContainer);
