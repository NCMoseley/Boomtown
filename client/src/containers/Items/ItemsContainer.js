import React, { Component } from "react";
import Items from "./Items";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import PropTypes from "prop-types";
import Gif from "../../images/cloud_load.gif";

class ItemsContainer extends Component {
  propTypes = {
    loading: PropTypes.bool,
    items: PropTypes.array
  };
  render() {
    const { loading, items, error } = this.props.data;
    if (loading)
      return <img alt={"Loading-gif"} style={{ width: "100%" }} src={Gif} />;
    else if (error) {
      console.log(error);
      return <p>error</p>;
    } else return <Items items={items} />;
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

// Colins VV NOTE
// const fetchItems = gql`
//   query {
//     items {
//       id
//       title
//       itemowner {
//         id
//         email
//         fullname
//       }
//       borrower {
//         id
//         fullname
//       }
//       created
//       imageurl
//       description
//       available
//       tags {
//         id
//         title
//       }
//     }
//   }
// `;

export default graphql(fetchItems)(ItemsContainer);
