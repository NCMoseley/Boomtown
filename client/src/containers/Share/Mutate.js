import React, { Component } from "react";
import Share from "./Share";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

const mutation = gql`
  mutation addItem(
    $newImageurl: String
    $newTitle: String
    $newDescription: String
    $newTags: [TagInput]
  ) {
    createNewItem(
      newItem: {
        imageurl: $newImageurl
        title: $newTitle
        description: $newDescription
        tags: $newTags
      }
    ) {
      imageurl
      title
      description
      tags {
        id
      }
    }
  }
`;

export default graphql(mutation, {
  props: ({ mutate }) => ({
    submit: body =>
      mutate({
        variables: body
      })
  })
})(Share);
