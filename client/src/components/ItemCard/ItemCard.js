import React, { Component } from "react";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";
import PropTypes from "prop-types";
// import styles from "./styles";

const ItemCard = ({ item }) => (
  <div>
    <Card>
      <CardHeader
        title={item.itemowner.fullname}
        subtitle={item.created.substring(0, 10)}
        avatar={item.imageurl}
      />
      <CardMedia>
        <img src={item.imageurl} alt="image" />
      </CardMedia>
      <CardTitle title={item.title} subtitle={item.tags[0]} />
      <CardText>{item.description}</CardText>
      <CardActions>
        <button className="borrow-button" label="Borrow">
          Borrow
        </button>
        <button className="borrow-button" label="rm -fr *">
          rm -fr *
        </button>
      </CardActions>
    </Card>
  </div>
);

ItemCard.propTypes = {
  item: PropTypes.object.isRequired
};

export default ItemCard;

// export default class ItemCard extends Component {
//   render() {
//     return (
//       <div>
//         <Card>
//           <CardHeader
//             title={this.props.item.itemowner.fullname}
//             subtitle={this.props.item.created.substring(0, 10)}
//             avatar={this.props.item.imageurl}
//           />
//           <CardMedia>
//             <img src={this.props.item.imageurl} alt="image" />
//           </CardMedia>
//           <CardTitle
//             title={this.props.item.title}
//             subtitle={this.props.item.tags[0]}
//           />
//           <CardText>{this.props.item.description}</CardText>
//           <CardActions>
//             <button className="borrow-button" label="Borrow">
//               Borrow
//             </button>
//             <button className="borrow-button" label="rm -fr *">
//               rm -fr *
//             </button>
//           </CardActions>
//         </Card>
//       </div>
//     );
//   }
// }
