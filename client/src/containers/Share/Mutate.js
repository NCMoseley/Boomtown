// import React, { Component } from "react";
// import Share from "./Share";
// import { graphql } from "react-apollo";
// import gql from "graphql-tag";

// const mutation = gql`
//   mutation addItem(
//     $imageurl: String
//     $title: String
//     $description: String
//     $tags: [TagInput]
//   ) {
//     addItem(
//       newItem: {
//         imageurl: $imageurl
//         title: $title
//         description: $description
//         tags: $tags
//       }
//     ) {
//       imageurl
//       title
//       description
//       tags {
//         id
//         title
//       }
//     }
//   }
// `;

// export default graphql(mutation, {
//   props: ({ mutate }) => ({
//     submit: body => mutate({ variables: { body } })
//   })
// })(Mutate);
