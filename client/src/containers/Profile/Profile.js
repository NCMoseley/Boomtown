import React from "react";
import Items from "../Items/Items";
import ItemCard from "../../components/ItemCard";
import PropTypes from "prop-types";
import ProfileContainer from "./ProfileContainer";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";
import RaisedButton from "material-ui/RaisedButton";
import moment from "moment";
import Gravatar from "react-gravatar";
import Paper from "material-ui/Paper";
import ValidatedTextField from "../../components/ValidatedTextField";
import logo from "../../images/boomtown-logo.svg";
import Masonry from "react-masonry-component";

const masonryOptions = {
  transitionDuration: 1000
};

const Profile = ({ items, user }) => (
  <div className="profile-container">
    <div className="profile-header">
      <Paper className={"profile-card"} zDepth={3}>
        <CardHeader
          title={items[0] && items[0].itemowner.fullname}
          subtitle={items[0] && items[0].itemowner.bio}
          // subtitle={items[0].itemowner.bio}
          avatar={<Gravatar email={items[0] && items[0].itemowner.email} />}
        />
        <CardMedia>
          {/* <img src={items[0] && items[0].imageurl} alt="image" /> */}
        </CardMedia>
        {/* <CardText>{items[0] && items[0].imageurl}</CardText> */}
        <CardActions />
      </Paper>
    </div>

    <div className={"profile-items-container"}>
      <Masonry options={masonryOptions} elementType={"div"}>
        <Items items={items} />
      </Masonry>
    </div>
  </div> // className="profile-container"
);

Profile.propTypes = {
  items: PropTypes.array.isRequired
};

export default Profile;
