import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import Home from './components/Home';
import SingleRecipe from './components/SingleRecipe';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';

import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux'
import store, { history } from './store';


const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}></IndexRoute>
        <Route path="/view/:recipeId" component={SingleRecipe}></Route>
        <Route path="/login" component={LoginPage}></Route>
        <Route path="/signup" component={SignupPage}></Route>
      </Route>
    </Router>
  </Provider>
)

ReactDOM.render(
  router,
  document.getElementById('root')
);
