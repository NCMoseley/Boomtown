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
  }

  handleChange = (event, index, selected) => {
    this.props.dispatch(setFilterValue(selected));
  };

  render() {
    // console.log(this.props.filters.map(filter => filter.title));
    // console.log(this.props);
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
                  multiple
                  autoWidth={true}
                  floatingLabelText="Filter by Tag"
                  onChange={this.handleChange}
                  value={this.props.selectedFilters}
                >
                  {this.props.filters.map(tag => (
                    <MenuItem
                      insetChildren
                      key={tag.title}
                      checked={
                        !!this.props.selectedFilters.find(f => f === tag.title)
                      }
                      value={tag.title}
                      primaryText={tag.title}
                    />
                  ))}
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
  return {
    filters: state.filter.filters,
    selectedFilters: state.filter.selectedFilters
  };
};

export default connect(mapStateToProps)(ToolbarExamplesSimple);
