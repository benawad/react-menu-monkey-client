import React, { Component } from 'react';
import { Card } from 'semantic-ui-react'
import { browserHistory } from 'react-router';

class RecipeList extends Component {

  constructor(props) {
    super(props);
    this.recipeClick = this.recipeClick.bind(this);
    this.RecipeCard = this.RecipeCard.bind(this);
  }

  recipeClick(id) {
    browserHistory.push(`view/${id}`);
  }

  RecipeCard(recipe, i) {
    return (
        <Card
        key={i}
        centered={true}
        image={recipe.imageURL}
        header={recipe.name}
        meta='Step one'
        onClick={this.recipeClick.bind(null, recipe._id)}
        description={recipe.steps[0]}
        />
    );
  }

  render() {
    return (
      <Card.Group itemsPerRow={5}>
        {this.props.recipes.map(this.RecipeCard)}
      </Card.Group>
    );
  }
}

export default RecipeList;
