import React from "react";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";
import { Link } from "react-router-dom";
import RaisedButton from "material-ui/RaisedButton";
import PropTypes from "prop-types";
import moment from "moment";
import Gravatar from "react-gravatar";

const ItemCard = ({ item }) => (
  <div>
    <Card>
      {item.borrower ? (
        <CardMedia
          overlay={<CardTitle subtitle={`Lent to ${item.borrower.fullname}`} />}
        >
          <img src={item.imageurl} alt={item.title} />
        </CardMedia>
      ) : (
        <CardMedia>
          <img src={item.imageurl} alt={item.title} />
        </CardMedia>
      )};
      <Link to={"/profile/" + item.itemowner.id}>
        <CardHeader
          title={item.itemowner.fullname}
          subtitle={moment(item.created).fromNow()}
          avatar={<Gravatar email={item.itemowner.email} />}
        />
      </Link>
      <CardTitle title={item.title} subtitle={item.tags[0]} />
      <CardText>{item.description}</CardText>
      <CardActions>
        <Link to={"/" + item.itemowner.id}>
          {item.borrower && <RaisedButton label="Borrow" secondary={true} />}
        </Link>
      </CardActions>
    </Card>
  </div>
);

ItemCard.propTypes = {
  item: PropTypes.object.isRequired
};

export default ItemCard;
