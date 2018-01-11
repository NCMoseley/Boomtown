import React, { Component } from "react";
import ItemCard from "../../components/ItemCard";

export default class Items extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.list.map(item => {
          return <ItemCard item={item} />;
        })}
      </div>
    );
  }
}
