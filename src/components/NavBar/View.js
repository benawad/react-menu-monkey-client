import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const loggedIn = (email, logout) => (
  <Menu.Menu position="right">
    <Menu.Item name="user" >
      <Link to="/profile/recipes">
        {email}
      </Link>
    </Menu.Item>

    <Menu.Item name="logout" onClick={logout}>
      logout
    </Menu.Item>
  </Menu.Menu>
);

const loggedOut = () => (
  <Menu.Menu position="right">
    <Menu.Item name="signup" >
      <Link to="/signup">
        sign up
      </Link>
    </Menu.Item>

    <Menu.Item name="login" >
      <Link to="/login">
        login
      </Link>
    </Menu.Item>
  </Menu.Menu>
);

export default ({ user, logout }) => (
  <Menu>
    <Menu.Item name="addRecipe" >
      <Link to="/recipes/add">
        Add Recipe
      </Link>
    </Menu.Item>

    { Object.values(user).length ? loggedIn(user.email, logout) : loggedOut() }
  </Menu>
);
