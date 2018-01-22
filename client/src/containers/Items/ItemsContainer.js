import React, { Component } from "react";
import Items from "./Items";
import { connect } from "react-redux";
import { fetchItemsAndUser } from "../../redux/modules/items";
import Gif from "../../images/cloud_load.gif";

class ItemsContainer extends Component {
  static propTypes = {};
  constructor(props) {
    super();
  }
  componentDidMount() {
    this.props.dispatch(fetchItemsAndUser());
  }

  render() {
    if (this.props.isLoading || this.props.items === undefined)
      return <img alt={"Loading-gif"} style={{ width: "100%" }} src={Gif} />;
    return (
      <Items
        items={this.props.items.filter(item => {
          if (this.props.filterValue === "") {
            // Note: Set to array instead of string?
            return true;
          } else {
            return item.tags.includes(this.props.filterValue);
          }
        })}
      />
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.items.isLoading,
  items: state.items.items,
  error: state.items.error,
  filterValue: state.filter.filterValue
});

export default connect(mapStateToProps)(ItemsContainer);
