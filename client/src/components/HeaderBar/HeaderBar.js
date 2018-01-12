import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import IconMenu from "material-ui/IconMenu";
import SelectField from "material-ui/SelectField";
import IconButton from "material-ui/IconButton";
import FontIcon from "material-ui/FontIcon";
import NavigationExpandMoreIcon from "material-ui/svg-icons/navigation/expand-more";
import MenuItem from "material-ui/MenuItem";
import DropDownMenu from "material-ui/DropDownMenu";
import RaisedButton from "material-ui/RaisedButton";
import logo from "../../images/boomtown-logo.svg";
import {
  Toolbar,
  ToolbarGroup,
  ToolbarSeparator,
  ToolbarTitle
} from "material-ui/Toolbar";

export default class ToolbarExamplesSimple extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 3
    };
  }

  handleChange = (event, index, value) => this.setState({ value });

  render() {
    return (
      <Toolbar style={{ backgroundColor: "#fff" }}>
        <ToolbarGroup firstChild={true}>
          <ToolbarSeparator />
          <a href="/">
            <img className="headerLogo" src={logo} />
          </a>
          <SelectField
            className="SelectField"
            floatingLabelText="Filter by Tag"
          />
        </ToolbarGroup>
        <ToolbarGroup>
          <FontIcon className="muidocs-icon-custom-sort" />
          <ToolbarSeparator />
          <Link to="/">
            <RaisedButton
              className="MyProfile"
              label="My Profile"
              primary={true}
            />
          </Link>
          <ToolbarSeparator />
          <Link to="/login">
            <RaisedButton
              className="Loginout"
              label="Login"
              backgroundColor="#808080"
              labelColor="#fff"
            />
          </Link>
        </ToolbarGroup>
      </Toolbar>
    );
  }
}
{
  /* <DropDownMenu value={this.state.value} onChange={this.handleChange}>
            <MenuItem value={1} primaryText="All Broadcasts" />
            <MenuItem value={2} primaryText="All Voice" />
            <MenuItem value={3} primaryText="All Text" />
            <MenuItem value={4} primaryText="Complete Voice" />
            <MenuItem value={5} primaryText="Complete Text" />
            <MenuItem value={6} primaryText="Active Voice" />
            <MenuItem value={7} primaryText="Active Text" />
          </DropDownMenu> */
}
{
  /* <IconMenu
            iconButtonElement={
              <IconButton touch={true}>
                <NavigationExpandMoreIcon />
              </IconButton>
            }
          >
            <MenuItem primaryText="Download" />
            <MenuItem primaryText="More Info" />
          </IconMenu> */
}
