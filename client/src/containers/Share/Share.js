import React from "react";
import PropTypes from "prop-types";
import Placeholder from "../../images/item-placeholder.jpg";
import Moment from "moment";
import Gravatar from "react-gravatar";
import { connect } from "react-redux";
import Items from "../Items/Items";
import { Step, Stepper, StepLabel, StepContent } from "material-ui/Stepper";
import RaisedButton from "material-ui/RaisedButton";
import SelectField from "material-ui/SelectField";
import { setFilterValue } from "../../redux/modules/filter";
import FlatButton from "material-ui/FlatButton";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";
import MenuItem from "material-ui/MenuItem";
import TextField from "material-ui/TextField";
import firebase from "firebase";
import Filter from "../../redux/modules/filter";
import { firebaseAuth } from "../../config/firebaseConfig";
import { graphql } from "graphql";
import gql from "graphql-tag";
import { Link } from "react-router-dom";

class Share extends React.Component {
  state = {
    finished: false,
    stepIndex: 0,
    newTitle: "Item Title",
    newDescription: "Description",
    newImageurl: "",
    newTags: ""
  };

  handleChange = (event, index, selected) => {
    this.props.dispatch(setFilterValue(selected));
  };

  handleNext = () => {
    const { stepIndex } = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2
    });
  };

  handlePrev = () => {
    const { stepIndex } = this.state;
    if (stepIndex > 0) {
      this.setState({ stepIndex: stepIndex - 1 });
    }
  };

  handleUpdateTitle = e => {
    this.setState({ newTitle: e.target.value });
  };

  handleUpdateDescription = e => {
    this.setState({ newDescription: e.target.value });
  };

  handleSelectClick = () => document.getElementById("imageInput").click();

  handleImageUpload = input => {
    const { newImageurl } = this.state;

    console.log(input.target.files[0].name);
    // create firebase storage reference
    const ref = firebase.storage().ref();
    // get the file to be uploaded from the input[type="file"]
    const file = input.target.files[0];
    const name = +new Date() + "-" + file.name;
    const metadata = {
      contentType: file.type
    };
    const task = ref.child(name).put(file, metadata);
    task
      .then(snapshot => {
        const url = snapshot.downloadURL;
        this.setState({ newImageurl: url });
      })
      .catch(error => {
        console.error(error);
      });
  };

  renderStepActions(step) {
    const { stepIndex } = this.state;

    return (
      <div style={{ margin: "12px 0" }}>
        <RaisedButton
          label={stepIndex === 3 ? "Confirm" : "Next"}
          disableTouchRipple={true}
          disableFocusRipple={true}
          primary={true}
          onClick={this.handleNext}
          style={{ marginRight: 12 }}
        />
        {step > 0 && (
          <FlatButton
            label="Back"
            disabled={stepIndex === 0}
            disableTouchRipple={true}
            disableFocusRipple={true}
            onClick={this.handlePrev}
          />
        )}
      </div>
    );
  }

  render() {
    const {
      finished,
      stepIndex,
      newTitle,
      newDescription,
      newImageurl,
      newTags
    } = this.state;

    return (
      <div className="sharecontainer">
        <div className="leftside">
          <Card style={{}} className="card">
            <CardMedia className="card-media">
              <img
                src={newImageurl ? newImageurl : Placeholder}
                alt="placeholder for uploaded photo"
              />
            </CardMedia>
            <Link to={`/profile/${firebaseAuth.currentUser}`}>
              <CardHeader
                subtitle={Moment().fromNow()}
                avatar={
                  <Gravatar
                    className="photo"
                    email={
                      firebaseAuth.currentUser && firebaseAuth.currentUser.email
                    }
                  />
                }
              />
            </Link>
            <CardTitle title={newTitle} />

            <CardText>{newDescription}</CardText>
          </Card>
        </div>

        <div className="rightside">
          <Stepper activeStep={stepIndex} orientation="vertical">
            <Step>
              <StepLabel style={{ color: "#fff" }}>Add an Image</StepLabel>
              <StepContent>
                <p>
                  We live in a visual culture. Upload an image of the item
                  you're sharing.
                </p>

                <RaisedButton
                  label="Select an Image"
                  onClick={this.handleSelectClick}
                >
                  <input
                    type="file"
                    accept="image/*"
                    onChange={this.handleImageUpload}
                    hidden
                    id="imageInput"
                  />
                </RaisedButton>

                {this.renderStepActions(0)}
              </StepContent>
            </Step>
            <Step>
              <StepLabel style={{ color: "#fff" }}>
                Add a Title & Description
              </StepLabel>
              <StepContent>
                <p>
                  Folks need to know what you're sharing. Give them a clue by
                  adding a title & description.
                </p>
                <TextField hintText="Title" onChange={this.handleUpdateTitle} />
                <br />
                <TextField
                  hintText="Description"
                  onChange={this.handleUpdateDescription}
                />
                {this.renderStepActions(1)}
              </StepContent>
            </Step>
            <Step>
              <StepLabel style={{ color: "#fff" }}>
                Categorize Your Item
              </StepLabel>
              <StepContent>
                <p>
                  To share an item, you'll add it to our list of categories. You
                  can select multiple categories.
                </p>
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
                {this.renderStepActions(2)}
              </StepContent>
            </Step>
            <Step>
              <StepLabel style={{ color: "#fff" }}>Confirm Things!</StepLabel>
              <StepContent>
                <p>
                  Great! If you're happy with everything, tap the Confirm
                  button.
                </p>
                {this.renderStepActions(2)}
              </StepContent>
            </Step>
          </Stepper>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    filters: state.filter.filters,
    selectedFilters: state.filter.selectedFilters,
    user: state.auth.authId
    // email: state.item.itemowner.email
  };
};

export default connect(mapStateToProps)(Share);
