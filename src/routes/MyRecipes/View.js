import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import RecipeList from '../../components/RecipeList';

class MyRecipes extends Component {

  componentWillMount() {
    this.props.requestMyRecipes({ 
      query: {
        ownerId: this.props.user._id,
      },
    });
  }

  render() {
    return (
      <RecipeList recipes={this.props.myRecipes} />
    );
  }
}

export default MyRecipes;
