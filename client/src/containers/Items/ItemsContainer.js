import React, { Component } from "react";
import Items from "./Items";

const ITEMS_URL = "http://localhost:4000/items";
const ITEMS_USERS = "http://localhost:4000/users";

export default class ItemsContainer extends Component {
  constructor() {
    super();
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    // Fetch JSON and attach state!
    const items = fetch(ITEMS_URL).then(r => r.json());
    const users = fetch(ITEMS_USERS).then(r => r.json());

    // Resolve promises into something we can use:
    Promise.all([items, users]).then(response => {
      // console.log(response);

      const [itemsList, userList] = response;

      //loop over the items
      // Map: look at all the items in the list and give me what I call
      const combined = itemsList.map(item => {
        //for every item add a 'user' property and set it to 'user!'
        item.itemowner = userList.find(user => user.id === item.itemowner);
        return item;
      });

      // const filtered = combined.filter(
      //   item => item.itemowner.fullname === "Mackenzie Kieran"
      // );

      this.setState({ items: combined });

      console.log(combined);
      //the information required lives in the response array*
      // merge the 2 list together, into a single list. use mapfunction*
      // add items from user array into items array*
      //find mandi in the first loop and go through the scond loop and ask
      //what mandi owns*
      // attach the new list to this component state*
      // pass that list into the items component*
      // the items compoinent should render the new lsit
      // userlist.map;
    });
  }

  render() {
    return <Items list={this.state.items} />;
  }
}
