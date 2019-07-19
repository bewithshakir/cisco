import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import rootReducers from './reducers';

import SearchMain from './components/search-main/SearchMain';
import Dashboard from './components/dashboard/dashboard';

const store = createStore(rootReducers, composeWithDevTools());

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={SearchMain}></Route>
            <Route exact path="/dashboard" component={Dashboard}></Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
