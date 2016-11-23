import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import Home from './components/Home';
import SingleRecipe from './components/SingleRecipe';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import AddRecipe from './components/AddRecipe';
import MyRecipes from './components/MyRecipes';

import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux'
import store, { history, app } from './store';
import { authGood } from './actions/actionCreators';


const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}></IndexRoute>
        <Route path="/view/:recipeId" component={SingleRecipe}></Route>
        <Route path="/login" component={LoginPage}></Route>
        <Route path="/signup" component={SignupPage}></Route>
        <Route path="/recipes/add" component={AddRecipe}></Route>
        <Route path="/profile/recipes" component={MyRecipes}></Route>
      </Route>
    </Router>
  </Provider>
)

app.authenticate().then((user) => {
  store.dispatch(authGood(user));
  ReactDOM.render(
    router,
    document.getElementById('root')
  );
}, () => {
  ReactDOM.render(
    router,
    document.getElementById('root')
  );
});
