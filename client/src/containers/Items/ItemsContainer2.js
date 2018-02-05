import React, { Component } from "react";
import Items from "./Items";
import { connect } from "react-redux";
import { fetchItemsAndUser } from "../../redux/modules/items";
import Gif from "../../images/cloud_load.gif";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

class ItemsContainer extends Component {
  static propTypes = {};
  constructor(props) {
    super();
  }
  componentDidMount() {
    this.props.dispatch(fetchItemsAndUser());
  }

  render() {
    // Filter functions
    if (this.props.isLoading || this.props.items === undefined)
      return <img alt={"Loading-gif"} style={{ width: "100%" }} src={Gif} />;
    return this.props.selectedFilters.length ? (
      <Items
        items={this.props.items.filter(item => {
          return this.props.selectedFilters.some(f => {
            return item.tags.map(t => t.title).includes(f);
          });
        })}
      />
    ) : (
      <Items items={this.props.items} />
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.items.isLoading,
  items: state.items.items,
  error: state.items.error,
  filters: state.filter.filters,
  selectedFilters: state.filter.selectedFilters
});

export default connect(mapStateToProps)(ItemsContainer);
