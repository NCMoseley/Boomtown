import React from "react";
import Items from "../Items/Items";

import PropTypes from "prop-types";

import Gravatar from "react-gravatar";
import Paper from "material-ui/Paper";

import Masonry from "react-masonry-component";

const masonryOptions = {
  transitionDuration: 1000
};

const Profile = ({ items, user }) => (
  <div className="profile-container">
    <div className="profile-header">
      <Paper className={"profile-card"} zDepth={3}>
        <div className={"profile-title"}>
          <h1>{items[0] && items[0].itemowner.fullname}</h1>
          <p>{items[0] && items[0].itemowner.bio}</p>
        </div>

        <Gravatar
          className={"gravatar"}
          size={180}
          email={items[0] && items[0].itemowner.email}
        />
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
