import React from 'react';
import {
  BrowserRouter,
  Route,
  Link,
} from 'react-router-dom';
import { Header, Container } from 'semantic-ui-react';

import { history } from '../store';

import Home from './Home';
import SingleRecipe from './SingleRecipe';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import AddRecipe from './AddRecipe';
import MyRecipes from './MyRecipes';
import requireAuthentication from '../components/Auth';
import NavBar from '../components/NavBar';

export default () => (
  <BrowserRouter history={history}>
    <Container>
      <Header as="h1" textAlign="center">
        <Link to="/">Menu Monkey</Link>
      </Header>
      <NavBar />
      <Route path="/" component={Home} />
      <Route path="/view/:recipeId" component={SingleRecipe} />
      <Route path="/login" component={LoginPage} />
      <Route path="/signup" component={SignupPage} />
      <Route path="/recipes/add" component={requireAuthentication(AddRecipe)} />
      <Route path="/profile/recipes" component={requireAuthentication(MyRecipes)} />
    </Container>
  </BrowserRouter>
);
