import React from 'react';
import { Menu } from 'semantic-ui-react';
import { history } from '../../store';

const loggedIn = (email, logout) => (
  <Menu.Menu position="right">
    <Menu.Item name="user" onClick={() => history.push('/profile/recipes')}>
      {email}
    </Menu.Item>

    <Menu.Item name="logout" onClick={logout}>
      logout
    </Menu.Item>
  </Menu.Menu>
);

const loggedOut = () => (
  <Menu.Menu position="right">
    <Menu.Item name="signup" onClick={() => history.push('/signup')}>
      sign up
    </Menu.Item>

    <Menu.Item name="login" onClick={() => history.push('/login')}>
      login
    </Menu.Item>
  </Menu.Menu>
);

export default ({ user, logout }) => (
  <Menu>
    <Menu.Item name="addRecipe" onClick={() => history.push('/recipes/add')}>
      Add Recipe
    </Menu.Item>

    { Object.values(user).length ? loggedIn(user.email, logout) : loggedOut() }
  </Menu>
);
