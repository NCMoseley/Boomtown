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
// import "./styles.css";

export default class ItemCard extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <img src={this.props.item.imageurl} />
          </li>
          <li>{this.props.item.description}</li>
          {/* <li>{this.props.item.itemowner.fullname}</li> */}
        </ul>
      </div>
    );
  }
}
