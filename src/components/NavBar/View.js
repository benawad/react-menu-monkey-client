import React from 'react';
import { Menu } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const loggedIn = (email, requestLogout, history) => (
  <Menu.Menu position="right">
    <Menu.Item name="user" onClick={() => history.push('/profile/recipes')}>
      {email}
    </Menu.Item>

    <Menu.Item name="logout" onClick={() => { requestLogout(); history.push('/'); }}>
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

const NavBar = ({ user, requestLogout, history }) => (
  <Menu>
    <Menu.Item name="addRecipe" onClick={() => history.push('/recipes/add')}>
      Add Recipe
    </Menu.Item>
    {
      Object.values(user).length
      ? loggedIn(user.email, requestLogout, history)
      : loggedOut(history)
    }
  </Menu>
);

NavBar.propTypes = {
  user: PropTypes.shape({
    _id: PropTypes.string,
    email: PropTypes.string,
  }),
  requestLogout: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default NavBar;
