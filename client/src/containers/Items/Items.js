import React, { Component } from "react";
import ItemCard from "../../components/ItemCard";
import PropTypes from "prop-types";
import Masonry from "react-masonry-component";

// Create a variable called list, and turn it into a string.
// Everything that comes after the arrow is explicitly returned.
const Items = ({ list }) => (
  <div>
    <Masonry>
      {list.map(item => <ItemCard item={item} key={item.id} />)}
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
