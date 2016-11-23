import React, { Component } from 'react';
import { Card } from 'semantic-ui-react'
import RecipeCard from './RecipeCard';

class RecipeList extends Component {
  constructor(props) {
    super(props);

    this.props.recentRecipes();
  }

  render() {
    return (
      <Card.Group itemsPerRow={5}>
        {this.props.recipes.map((recipe, i) => <RecipeCard {...this.props} key={i} recipe={recipe}/>)}
      </Card.Group>
    );
  }
}

export default RecipeList;
