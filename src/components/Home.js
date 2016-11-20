import React, { Component } from 'react';
import RecipeList from './RecipeList';

import { Input, Divider } from 'semantic-ui-react'

class Home extends Component {
  render() {
    return (
      <div>
        <Input fluid placeholder='Search...' />
        <Divider />
        <RecipeList {...this.props} /> 
      </div>
    );
  }
}

export default Home;
