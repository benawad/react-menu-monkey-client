import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { history } from '../store';

import Home from './Home';
import SingleRecipe from './SingleRecipe';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import AddRecipe from './AddRecipe';
import MyRecipes from './MyRecipes';
import requireAuthentication from '../components/Auth';

export default () => (
  <Router history={history}>
    <IndexRoute component={Home} />
    <Route path="/view/:recipeId" component={SingleRecipe} />
    <Route path="/login" component={LoginPage} />
    <Route path="/signup" component={SignupPage} />
    <Route path="/recipes/add" component={requireAuthentication(AddRecipe)} />
    <Route path="/profile/recipes" component={requireAuthentication(MyRecipes)} />
  </Router>
);
