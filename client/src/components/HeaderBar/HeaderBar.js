import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
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
import Paper from "material-ui/Paper";

class ToolbarExamplesSimple extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: [],
      input2: null
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event, index, value) => this.setState({ value });

  render() {
    return (
      <Paper zDepth={3}>
        <Toolbar className="headerbar" style={{ backgroundColor: "#fff" }}>
          <ToolbarGroup firstChild={true}>
            <ToolbarSeparator />
            <a href="/">
              <img className="headerLogo" src={logo} />
            </a>
            <SelectField
              className="SelectField"
              floatingLabelText="Filter by Tag"
              onChange={this.handleChange}
            >
              <MenuItem
                checked={false}
                value={"Electronics"}
                primaryText="Electronics"
              />
              <MenuItem value={"Houshold Items"} primaryText="Houshold Items" />
              <MenuItem
                value={"Musical Instruments"}
                primaryText="Musical Instruments"
              />
              <MenuItem value={"Physical Media"} primaryText="Physical Media" />
              <MenuItem
                value={"Recreational Equipment"}
                primaryText="Recreational Equipment"
              />
              <MenuItem value={"Sporting Goods"} primaryText="Sporting Goods" />
              <MenuItem value={"Tools"} primaryText="Tools" />
            </SelectField>
          </ToolbarGroup>
          <ToolbarGroup className="buttonbox">
            <FontIcon className="muidocs-icon-custom-sort" />
            <ToolbarSeparator />
            <Link to="/profile">
              <RaisedButton label="My Profile" primary={true} />
            </Link>
            <ToolbarSeparator />
            <Link to="/login">
              <RaisedButton label="Logout" secondary={true} />
            </Link>
          </ToolbarGroup>
        </Toolbar>
      </Paper>
    );
  }
}

const mapStateToProps = state => ({
  filterValue: state.filterValue
});

export default connect(mapStateToProps)(ToolbarExamplesSimple);

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
