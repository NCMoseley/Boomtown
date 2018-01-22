import React from "react";
import ItemCard from "../ItemCard";
import PropTypes from "prop-types";
import Masonry from "react-masonry-component";

const masonryOptions = {
  transitionDuration: 1000
};

const Items = ({ items }) => (
  <div className={"items-container"}>
    <Masonry
      options={masonryOptions}
      elementType={"div"} // default 'div'
    >
      {items.map(item => (
        <div className={"cards"} key={item.id}>
          <ItemCard item={item} key={item.id} />
        </div>
      ))}
    </Masonry>
  </div>
);

Items.propTypes = {
  items: PropTypes.array.isRequired
};

export default Items;
