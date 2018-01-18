import React from "react";
import Items from "../Items";
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

const Profile = ({ list }) => (
  <div
    className={"items-container"}
    title={list.map(list => (
      <div className={"cards"} key={list.itemowner.fullname}>
        <CardHeader item={list} key={list.id} />
      </div>
    ))}
  >
    <Paper zDepth={3}>
      <CardHeader
        title={list[0] && list[0].itemowner.fullname}

        // subtitle={moment(item.created).fromNow()}
        // avatar={<Gravatar email={item.itemowner.email} />}
      />
      <CardHeader
      // title={list.itemowner.fullname}
      // subtitle={moment(list.created).fromNow()}
      // avatar={<Gravatar email={list.itemowner.email} />}
      />
      <CardMedia>{/* <img src={item.imageurl} alt="image" /> */}</CardMedia>
      {/* <CardTitle title={item.title} subtitle={item.tags[0]} /> */}
      {/* <CardText>{item.description}</CardText> */}
      <CardActions>
        <RaisedButton label="rm -fr *" disabled={true} />
      </CardActions>
    </Paper>

    <Masonry
      options={masonryOptions}
      elementType={"div"} // default 'div'
    >
      {list.map(item => (
        <div className={"cards"} key={item.id}>
          <ItemCard item={item} key={item.id} />
        </div>
      ))}
    </Masonry>
  </div>
);

Profile.propTypes = {
  list: PropTypes.array.isRequired
};

export default Profile;
