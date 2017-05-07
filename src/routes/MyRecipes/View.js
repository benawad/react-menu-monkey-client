import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import RecipeCard from '../../components/RecipeCard';

class MyRecipes extends Component {

  componentWillMount() {
    this.props.requestMyRecipe({ 
      query: {
        ownerId: this.props.user._id,
      },
    });
  }

  render() {
    return (
      <Card.Group itemsPerRow={5}>
        {this.props.myRecipes.map((recipe, i) => RecipeCard(recipe, i))}
      </Card.Group>
    );
  }
}

export default MyRecipes;
