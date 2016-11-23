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
       <Menu.Item name='user'>
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
    console.log(currUser);
    return (
      <Menu>
        <Menu.Item name='browse' active={'a' === 'browse'}>
          Browse
        </Menu.Item>

        <Menu.Item name='submit' active={'a' === 'submit'}>
          Submit
        </Menu.Item>

        {currUser ? this.loggedIn() : this.loggedOut()}
      </Menu>
    )
  }
}

export default NavBar;
