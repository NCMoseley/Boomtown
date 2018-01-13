import React from "react";
import ReactDOM from "react-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import registerServiceWorker from "./registerServiceWorker";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./index.css";
import muiTheme from "./config/theme";
import Layout from "./components/Layout";
import Login from "./containers/Login";
import Items from "./containers/Items";

const Boomtown = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Items} />
          {/* {
            <Route exact path="/profile/userid" component=() />
            <Route exact path="/share" component=() />
          } */}
        </Switch>
      </Layout>
    </Router>
  </MuiThemeProvider>
);

ReactDOM.render(<Boomtown />, document.getElementById("root"));
registerServiceWorker();
