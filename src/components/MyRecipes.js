import React, { Component } from 'react';
import { Card } from 'semantic-ui-react'
import { browserHistory } from 'react-router';
import RecipeCard from './RecipeCard';

class RecipeList extends Component {
  render() {
    return (
      <Card.Group itemsPerRow={5}>
        {this.props.recipes.map((recipe, i) => <RecipeCard {...this.props} key={i} recipe={recipe}/>)}
      </Card.Group>
    );
  }
}

export default RecipeList;
