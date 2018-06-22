import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import muiTheme from './config/theme';
import Layout from './components/Layout';
// import Login from "./containers/Login";
import Items from './containers/Items';
import Profile from './containers/Profile';
import NotFound from './containers/NotFound';
import { ApolloProvider } from 'react-apollo';
import client from './config/apolloclient';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
// import items from "./redux/modules/items";
import Share from './containers/Share';
import {
    userLoading,
    updateAuthState,
    updateAuthId
} from './redux/modules/auth';
import { firebaseAuth } from './config/firebaseConfig';
import LoginContainer from './containers/Login/LoginContainer';

let gotProfile = false;
store.subscribe(() => {
    const values = store.getState();
    if (values.authenticated !== 'LOADING_USER' && !gotProfile) {
        gotProfile = true;
        store.dispatch(userLoading(false));
    }
});

firebaseAuth.onAuthStateChanged(user => {
    if (user) {
        store.dispatch(updateAuthState(user));
        store.dispatch(updateAuthId(firebaseAuth.currentUser.uid));
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
                        <Layout>
                            <Switch>
                                <Route
                                    exact
                                    path="/"
                                    component={LoginContainer}
                                />
                                <PrivateRoute
                                    exact
                                    path="/items"
                                    component={Items}
                                />
                                <PrivateRoute
                                    exact
                                    path="/profile/:userid"
                                    component={Profile}
                                />
                                <PrivateRoute
                                    exact
                                    path="/share"
                                    component={Share}
                                />

                                <Route exact path="*" component={NotFound} />
                            </Switch>
                        </Layout>
                    </div>
                </Router>
            </ApolloProvider>
        </Provider>
    </MuiThemeProvider>
);

ReactDOM.render(<Boomtown />, document.getElementById('root'));
registerServiceWorker();
