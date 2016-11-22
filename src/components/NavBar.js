import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

class NavBar extends Component {

  render() {
    return (
      <Menu>
        <Menu.Item name='browse' active={'a' === 'browse'}>
          Browse
        </Menu.Item>

        <Menu.Item name='submit' active={'a' === 'submit'}>
          Submit
        </Menu.Item>

       <Menu.Menu position='right'>
         <Menu.Item name='signup' active={'a' === 'signup'}>
           Sign Up
         </Menu.Item>

         <Menu.Item name='help' active={'a' === 'help'}>
           Help
         </Menu.Item>
       </Menu.Menu>
      </Menu>
    )
  }
}

export default NavBar;
