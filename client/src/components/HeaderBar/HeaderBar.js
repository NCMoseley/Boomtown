import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import SelectField from "material-ui/SelectField";
import FontIcon from "material-ui/FontIcon";
import MenuItem from "material-ui/MenuItem";
import RaisedButton from "material-ui/RaisedButton";
import logo from "../../images/boomtown-logo.svg";
import { setFilterValue } from "../../redux/modules/filter";
import { Toolbar, ToolbarGroup, ToolbarSeparator } from "material-ui/Toolbar";
import Paper from "material-ui/Paper";

class ToolbarExamplesSimple extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: []
    };
    // this.handleChange = this.handleChange.bind(this); // Note: Binding might not be necessary.
  }

  handleChange = (event, index, value) => {
    // console.log(value);
    this.props.dispatch(setFilterValue(value));
  };

  render() {
    // console.log(this.props.filterValue);
    return (
      <Paper zDepth={3}>
        <Toolbar className="headerbar" style={{ backgroundColor: "#fff" }}>
          <ToolbarGroup firstChild={true}>
            <ToolbarSeparator />
            <a href="/">
              <img alt="HeaderLogo" className="headerLogo" src={logo} />
            </a>
            <Route
              exact
              path="/"
              render={() => (
                <SelectField
                  className="SelectField"
                  // multiple
                  autoWidth={true}
                  floatingLabelText="Filter by Tag"
                  onChange={this.handleChange}
                  value={this.props.filterValue}
                  // value={this.props.tag}
                >
                  <MenuItem
                    // insetChildren
                    // checked={values && values.indexOf("Electronics") > -1}
                    checked={this.props.filterValue === "Electronics"}
                    value={"Electronics"}
                    primaryText="Electronics"
                  />
                  <MenuItem
                    // insetChildren
                    checked={this.props.filterValue === "Household Items"}
                    value={"Household Items"}
                    primaryText="Household Items"
                  />
                  <MenuItem
                    // insetChildren
                    checked={this.props.filterValue === "Musical Instruments"}
                    value={"Musical Instruments"}
                    primaryText="Musical Instruments"
                  />
                  <MenuItem
                    // insetChildren
                    checked={this.props.filterValue === "Physical Media"}
                    value={"Physical Media"}
                    primaryText="Physical Media"
                  />
                  <MenuItem
                    // insetChildren
                    checked={
                      this.props.filterValue === "Recreational Equipment"
                    }
                    value={"Recreational Equipment"}
                    primaryText="Recreational Equipment"
                  />
                  <MenuItem
                    // insetChildren
                    checked={this.props.filterValue === "Sporting Goods"}
                    value={"Sporting Goods"}
                    primaryText="Sporting Goods"
                  />
                  <MenuItem
                    // insetChildren
                    checked={this.props.filterValue === "Tools"}
                    value={"Tools"}
                    primaryText="Tools"
                  />
                </SelectField>
              )}
            />
          </ToolbarGroup>
          <ToolbarGroup className="buttonbox">
            <FontIcon className="muidocs-icon-custom-sort" />
            <ToolbarSeparator />
            <Link to="/profile:userid">
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

const mapStateToProps = state => {
  console.log(state);
  return {
    filterValue: state.filter.filterValue
  };
};

export default connect(mapStateToProps)(ToolbarExamplesSimple);
