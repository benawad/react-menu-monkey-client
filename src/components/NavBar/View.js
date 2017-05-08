import React from 'react';
import { Menu } from 'semantic-ui-react';

const loggedIn = (email, logout, history) => (
  <Menu.Menu position="right">
    <Menu.Item name="user" onClick={() => history.push('/profile/recipes')}>
      {email}
    </Menu.Item>

    <Menu.Item name="logout" onClick={() => { logout(); history.push('/'); }}>
      logout
    </Menu.Item>
  </Menu.Menu>
);

const loggedOut = history => (
  <Menu.Menu position="right">
    <Menu.Item name="signup" onClick={() => history.push('/signup')}>
      sign up
    </Menu.Item>

    <Menu.Item name="login" onClick={() => history.push('/login')}>
      login
    </Menu.Item>
  </Menu.Menu>
);

export default ({ user, logout, history }) => (
  <Menu>
    <Menu.Item name="addRecipe" onClick={() => history.push('/recipes/add')}>
      Add Recipe
    </Menu.Item>

    { Object.values(user).length ? loggedIn(user.email, logout, history) : loggedOut(history) }
  </Menu>
);
