import React, { Component } from "react";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import "./styles.css";

export default class ItemCard extends Component {
  render() {
    return (
      <div>
        <Card>
          <CardHeader
            title="Author"
            subtitle={this.props.item.itemowner.fullname}
            avatar={this.props.item.imageurl}
          />
          <CardMedia
            overlay={
              <CardTitle
                title={this.props.item.title}
                subtitle={this.props.item.tags[0]}
              />
            }
          >
            <img src={this.props.item.imageurl} alt="image" />
          </CardMedia>
          <CardTitle
            title={this.props.item.description}
            subtitle={this.props.item.created.substring(0, 10)}
          />
          <CardText>{this.props.item.description}</CardText>
          <CardActions>
            <FlatButton label="Action1" />
            <FlatButton label="rm -fr *" />
          </CardActions>
        </Card>
      </div>
    );
  }
}

// export default CardExampleWithAvatar;
