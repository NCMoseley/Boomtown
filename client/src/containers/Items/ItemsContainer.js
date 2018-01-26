import React, { Component } from "react";
import Items from "./Items";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import PropTypes from "prop-types";

class ItemsContainer extends Component {
  propTypes = {
    loading: PropTypes.bool,
    items: PropTypes.array
  };
  render() {
    const { loading, items } = this.props.data;
    return loading ? <p>Loading....</p> : <Items items={items} />;
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
      }
    }
  }
`;
export default graphql(fetchItems)(ItemsContainer);
