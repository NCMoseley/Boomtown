import React, { Component } from "react";
import Items from "./Items";
import { graphql, compose } from "react-apollo";
import gql from "graphql-tag";
import PropTypes from "prop-types";
import Gif from "../../images/cloud_load.gif";
// import { firebaseAuth, firebaseApp } from "../../config/firebaseConfig";
import { connect } from "react-redux";

class ItemsContainer extends Component {
  propTypes = {
    loading: PropTypes.bool,
    items: PropTypes.array
  };
  render() {
    const { loading, items, error } = this.props.data;
    let filtered = [];
    if (loading)
      return (
        <img
          alt={"Loading-gif"}
          style={{ width: "100%", filter: "brightness(150%)" }}
          src={Gif}
        />
      );
    else if (error) {
      console.log("Items Container", error);
      return <p>error</p>;
    } else if (items)
      filtered = items.filter(item => {
        return item.tags.some(tag => {
          return this.props.selectedFilters.includes(tag.title);
        });
      });

    return (
      <Items
        items={this.props.selectedFilters.length === 0 ? items : filtered}
      />
    );
  }
}

const fetchItems = gql`
  query {
    items {
      title
      imageurl
      description
      available
      created
      tags {
        id
        title
      }
      borrower {
        id
        fullname
      }
      itemowner {
        id
        email
        fullname
        bio
      }
    }
  }
`;

const mapStateToProps = state => {
  return {
    filters: state.filter.filters,
    selectedFilters: state.filter.selectedFilters,
    user: state.auth.authId
  };
};

export default compose(graphql(fetchItems), connect(mapStateToProps))(
  ItemsContainer
);
