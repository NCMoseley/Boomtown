import React, { Component } from "react";
import PropTypes from "prop-types";
import Profile from "./Profile";
// import { connect } from "react-redux";
// import { fetchItemsAndUser } from "../../redux/modules/profile";
import Gif from "../../images/cloud_load.gif";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

class ProfileContainer extends Component {
  static propTypes = {
    loading: PropTypes.bool,
    user: PropTypes.array
  };
  render() {
    const { loading, user, error } = this.props.data;
    if (loading)
      return (
        <img
          alt={"Loading-gif"}
          style={{
            width: "100%",
            filter: "brightness(150%)"
          }}
          src={Gif}
        />
      );
    else if (error) {
      console.log(error);
      return <p>Error in ProfileContainer </p>;
    } else return <Profile items={user.shareditems} user={user} />;
  }
}

const fetchUser = gql`
  query getUser($id: ID) {
    user(id: $id) {
      id
      email
      fullname
      bio

      shareditems {
        id
        title
        created
        itemowner {
          id
          email
          fullname
        }
        borrower {
          id
          fullname
        }
        imageurl
        description
        available
        tags {
          id
          title
        }
        borrower {
          id
        }
      }
    }
  }
`;
// Note:

export default graphql(fetchUser, {
  options: ({ match }) => ({
    variables: {
      id: match.params.userid
    }
  })
})(ProfileContainer);
