import React from 'react';
import {
  BrowserRouter,
  Route,
  Link,
} from 'react-router-dom';
import { Header, Container } from 'semantic-ui-react';

import Home from './Home';
import SingleRecipe from './SingleRecipe';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import AddRecipe from './AddRecipe';
import MyRecipes from './MyRecipes';
import requireAuthentication from '../components/Auth';
import getUser from '../components/GetUser';
import NavBar from '../components/NavBar';

export default () => (
  <BrowserRouter>
    <Container>
      <Header as="h1" textAlign="center">
        <Link to="/">Menu Monkey</Link>
      </Header>
      <Route path="/" render={props => (<NavBar {...props} />)} />
      <Route exact path="/" component={getUser(Home)} />
      <Route path="/view/:recipeId" render={props => (<SingleRecipe {...props} />)} />
      <Route path="/login" render={props => (<LoginPage {...props} />)} />
      <Route path="/signup" render={props => (<SignupPage {...props} />)} />
      <Route path="/recipes/add" component={requireAuthentication(AddRecipe)} />
      <Route path="/profile/recipes" component={requireAuthentication(MyRecipes)} />
    </Container>
  </BrowserRouter>
);
