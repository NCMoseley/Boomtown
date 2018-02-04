import React from "react";
import PropTypes from "prop-types";
import Placeholder from "../../images/item-placeholder.jpg";
import Moment from "moment";
import Gravatar from "react-gravatar";
import { connect } from "react-redux";
import Items from "../Items/Items";

// import Material UI components
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

class Share extends React.Component {
  state = {
    finished: false,
    stepIndex: 0
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

  // Handlers for custom functionality
  // https://time2hack.com/2017/10/upload-files-to-firebase-storage-with-javascript/

  handleSelectClick = () => document.getElementById("imageInput").click();

  handleImageUpload = input => {
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
        console.log(url);
        // document.querySelector("#someImageTagID").src = url;
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
    console.log(this.props.selectedFilters);
    console.log(this.props.email);
    const { finished, stepIndex } = this.state;

    return (
      <div className="sharecontainer">
        <div className="leftside">
          <Card style={{}} className="card">
            <CardMedia className="card-media">
              <img src={Placeholder} alt="placeholder for uploaded photo" />
            </CardMedia>

            <CardHeader
              title="Bob Loblaw"
              subtitle={Moment().fromNow()}
              avatar={
                <Gravatar className="photo" email={this.props.itemowner} />
              }
            />

            <CardTitle title="Item Title" />

            <CardText>Item description.</CardText>
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
                <TextField hintText="Title" />
                <br />
                <TextField hintText="Description" />
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
