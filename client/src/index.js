import React from "react";
import ReactDOM from "react-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
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

const Boomtown = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <Router>
          <div>
            <Route exact path="/login" component={Login} />
            <Layout>
              <Switch>
                <Route exact path="/" component={Items} />

                <Route exact path="/profile/:userid" component={Profile} />
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
