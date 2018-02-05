import React from "react";
import ItemCardList from "../../components/ItemCardList";
import PropTypes from "prop-types";

// Create a variable called items, and turn it into a string.
// Everything that comes after the arrow is explicitly returned.
const Items = ({ items }) => <ItemCardList items={items} />;

Items.propTypes = {
  items: PropTypes.array.isRequired
};

export default Items;
