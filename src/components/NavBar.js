import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { browserHistory } from 'react-router';

class NavBar extends Component {

  constructor(props) {
    super(props);
    this.loggedIn = this.loggedIn.bind(this);
    this.loggedOut = this.loggedOut.bind(this);
  }

  loggedIn() {
    return (
     <Menu.Menu position='right'>
       <Menu.Item name='user' onClick={() => browserHistory.push('profile/recipes')}>
        {this.props.user.data.email}
       </Menu.Item>

       <Menu.Item name='logout' onClick={this.props.logout}>
         logout
       </Menu.Item>
     </Menu.Menu>
    )
  }

  loggedOut() {
    return (
     <Menu.Menu position='right'>
       <Menu.Item name='signup' onClick={() => browserHistory.push('signup')}>
          sign up
       </Menu.Item>

       <Menu.Item name='login' onClick={() => browserHistory.push('login')}>
         login
       </Menu.Item>
     </Menu.Menu>
    )
  }

  render() {
    const currUser = this.props.user.hasOwnProperty('data');
    return (
      <Menu>
        <Menu.Item name='addRecipe' onClick={() => browserHistory.push('recipes/add')}>
          Add Recipe
        </Menu.Item>

        {currUser ? this.loggedIn() : this.loggedOut()}
      </Menu>
    )
  }
}

export default NavBar;
