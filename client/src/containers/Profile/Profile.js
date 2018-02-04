import React from "react";
import Items from "../Items/Items";
import PropTypes from "prop-types";
import Gravatar from "react-gravatar";
import Paper from "material-ui/Paper";
import Masonry from "react-masonry-component";
import items from "../../redux/modules/items";
import gql from "graphql-tag";

const masonryOptions = {
  transitionDuration: 1000
};

// Note

const Profile = ({ items, user }) => (
  <div className="profile-container">
    <div className="profile-header">
      <Paper className={"profile-card"} zDepth={3}>
        <div className={"profile-title"}>
          <h1>{user.fullname}</h1>
          <p>{user.bio}</p>
          {/* <p>{user.shareditems}</p> */}
          {/* <p>{user.borroweditems}</p> */}
        </div>

        <Gravatar className={"gravatar"} size={180} email={user.email} />
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
