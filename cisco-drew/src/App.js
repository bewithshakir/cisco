import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import rootReducers from './reducers';
import thunk from 'redux-thunk';



import SearchMain from './components/search-main/searchMain';
import Dashboard from './components/dashboard/dashboard';
import PrivateRoute from './components/common/PrivateRoute';

const middleware = [thunk];
const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(...middleware)));

// Check for token
// if (localStorage.jwtToken) {
  
//   /* // Set auth token header auth
//   setAuthToken(localStorage.jwtToken);
//   // Decode token and get user info and exp
//   const decoded = jwt_decode(localStorage.jwtToken);
//   // Set user and isAuthenticated
//   store.dispatch(setCurrentUser(decoded)); */

//   // Check for expired token
//   const currentTime = Date.now() / 1000;
//   if (decoded.exp < currentTime) {
//     console.log('Token is now expired!')
//     /* // Logout user
//     store.dispatch(logoutUser());
//     // Clear current Profile
//     store.dispatch(clearCurrentProfile());
//     // Redirect to login
//     window.location.href = '/login'; */
//   }
// }


function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Route exact path="/" component={SearchMain}></Route>
          {/* <Route exact path="/dashboard" component={Dashboard}></Route> */}
          <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
