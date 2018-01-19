import React, { Component } from "react";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";
import RaisedButton from "material-ui/RaisedButton";
import PropTypes from "prop-types";
import moment from "moment";
import Gravatar from "react-gravatar";

const ItemCard = ({ item }) => (
  <div>
    <Card>
      <CardMedia
        overlay={
          <CardTitle title="Overlay title" subtitle="Overlay subtitle" />
        }
      >
        <img src={item.imageurl} alt="image" />
      </CardMedia>
      <a href={"/" + item.itemowner.id}>
        <CardHeader
          title={item.itemowner.fullname}
          subtitle={moment(item.created).fromNow()}
          avatar={<Gravatar email={item.itemowner.email} />}
        />{" "}
      </a>
      <CardTitle title={item.title} subtitle={item.tags[0]} />
      <CardText>{item.description}</CardText>
      <CardActions>
        <RaisedButton label="Borrow" secondary={true} />
      </CardActions>
    </Card>
  </div>
);

ItemCard.propTypes = {
  item: PropTypes.object.isRequired
};

export default ItemCard;
