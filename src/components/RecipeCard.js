import React, { Component } from 'react';
import { Card } from 'semantic-ui-react'
import { browserHistory } from 'react-router';

class RecipeCard extends Component {

  constructor(props) {
    super(props);
    this.recipeClick = this.recipeClick.bind(this);
  }

  recipeClick(id) {
    browserHistory.push(`view/${id}`);
  }

  render() {
    const { recipe } = this.props;
    return (
        <Card
        centered={true}
        image={recipe.imageURL}
        header={recipe.name}
        meta='Description'
        onClick={() => this.recipeClick(recipe._id)}
        description={recipe.description.substring(0, 100) + '...'}
        />
    );
  }
}

export default RecipeCard;
