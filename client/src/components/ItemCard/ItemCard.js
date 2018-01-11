import React, { Component } from "react";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";
// import FlatButton from "material-ui/FlatButton";
import "./styles.css";

export default class ItemCard extends Component {
  render() {
    return (
      <div>
        <Card>
          <CardHeader
            title={this.props.item.itemowner.fullname}
            subtitle={this.props.item.created.substring(0, 10)}
            avatar={this.props.item.imageurl}
          />
          <CardMedia>
            <img src={this.props.item.imageurl} alt="image" />
          </CardMedia>
          <CardTitle
            title={this.props.item.title}
            subtitle={this.props.item.tags[0]}
          />
          <CardText>{this.props.item.description}</CardText>
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
  }
}

// export default CardExampleWithAvatar;
