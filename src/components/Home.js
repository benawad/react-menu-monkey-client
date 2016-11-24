import React, { Component } from 'react';
import RecipeList from './RecipeList';

import { Divider } from 'semantic-ui-react'

class Home extends Component {
  render() {
    return (
      <div>
        <Divider />
        <RecipeList {...this.props} /> 
      </div>
    );
  }
}

export default Home;
