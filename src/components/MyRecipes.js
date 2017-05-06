import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import RecipeCard from './RecipeCard';

class MyRecipes extends Component {
  constructor(props) {
    super(props);
    this.props.fetchMyRecipes(this.props.user.data._id);
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
