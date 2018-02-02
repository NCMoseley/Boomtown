import React from "react";
import ReactDOM from "react-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import registerServiceWorker from "./registerServiceWorker";
import { Provider, connect } from "react-redux";
import store from "./redux/store";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./index.css";
import muiTheme from "./config/theme";
import Layout from "./components/Layout";
import Login from "./containers/Login";
import Items from "./containers/Items";
import Profile from "./containers/Profile";
import NotFound from "./containers/NotFound";
import { ApolloProvider } from "react-apollo";
import client from "./config/apolloclient";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import items from "./redux/modules/items";
import Share from "./containers/Share";
import { userLoading } from "./redux/modules/auth";

import { firebaseAuth } from "./config/firebaseConfig";
import { updateAuthState } from "./redux/modules/auth";

let gotProfile = false;
store.subscribe(() => {
  const values = store.getState();
  if (!values.authenticated === "LOADING_USER" && !gotProfile) {
    gotProfile = true;
    store.dispatch(userLoading(false));
  }
});

firebaseAuth.onAuthStateChanged(user => {
  console.log("checking for user....");
  if (user) {
    store.dispatch(updateAuthState(user));
  } else {
    store.dispatch(updateAuthState(false));
  }
});

const Boomtown = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <Router>
          <div>
            <Route exact path="/login" component={Login} />
            <Layout>
              <Switch>
                <PrivateRoute exact path="/items" component={Items} />
                <PrivateRoute exact path="/" component={Items} />
                <PrivateRoute exact path="/profile" component={Profile} />
                <PrivateRoute exact path="/share" component={Share} />
                {/* <Route exact path="/share" component=() /> */}

                <Route exact path="*" component={NotFound} />
              </Switch>
            </Layout>
          </div>
        </Router>
      </ApolloProvider>
    </Provider>
  </MuiThemeProvider>
);

ReactDOM.render(<Boomtown />, document.getElementById("root"));
registerServiceWorker();
