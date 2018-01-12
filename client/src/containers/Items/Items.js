import React, { Component } from "react";
import ItemCard from "../../components/ItemCard";
import PropTypes from "prop-types";
import Masonry from "react-masonry-component";

const masonryOptions = {
  transitionDuration: 1000
};
// Create a variable called list, and turn it into a string.
// Everything that comes after the arrow is explicitly returned.
const Items = ({ list }) => (
  <div className={"items-container"}>
    <Masonry
      options={masonryOptions}
      className={"masonry"} // default ''
      elementType={"div"} // default 'div'
    >
      {list.map(item => (
        <div className={"cards"} key={item.id}>
          <ItemCard item={item} key={item.id} />
        </div>
      ))}
    </Masonry>
  </div>
);

Items.propTypes = {
  list: PropTypes.array.isRequired
};

export default Items;

// export default class Items extends Component {
//   render() {
//     console.log(this.props);
//     return (
//       <div>
//         {this.props.list.length &&
//           this.props.list.map(item => {
//             return <ItemCard item={item} key={item.id} />;
//           })}
//       </div>
//     );
//   }
// }
