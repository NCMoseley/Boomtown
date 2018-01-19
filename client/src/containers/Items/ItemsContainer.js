import React, { Component } from "react";
import Items from "./Items";
import { connect } from "react-redux";
import PropTypes from "prop-types";
// import Loader from "../../components/Loader";
import { fetchItemsAndUser } from "../../redux/modules/items";

const ITEMS_URL = "http://localhost:3001/items";
const ITEMS_USERS = "http://localhost:3001/users";

class ItemsContainer extends Component {
  static propTypes = {};
  constructor(props) {
    super();
  }
  componentDidMount() {
    this.props.dispatch(fetchItemsAndUser());
  }

  render() {
    if (this.props.isLoading) return <p> Loading </p>;
    return <Items items={this.props.items} />;
  }
}

const mapStateToProps = state => ({
  isLoading: state.items.isLoading,
  items: state.items.items,
  error: state.items.error
});

export default connect(mapStateToProps)(ItemsContainer);
