import React from 'react';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';

import { history } from '../store';

import Home from './Home';
import SingleRecipe from './SingleRecipe';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import AddRecipe from './AddRecipe';
import MyRecipes from './MyRecipes';
import requireAuthentication from '../components/Auth';

export default () => (
  <ConnectedRouter history={history}>
    <Route path="/" component={Home} />
    {/*<Route path="/view/:recipeId" component={SingleRecipe} />
    <Route path="/login" component={LoginPage} />
    <Route path="/signup" component={SignupPage} />
    <Route path="/recipes/add" component={requireAuthentication(AddRecipe)} />
    <Route path="/profile/recipes" component={requireAuthentication(MyRecipes)} />*/}
  </ConnectedRouter>
);
