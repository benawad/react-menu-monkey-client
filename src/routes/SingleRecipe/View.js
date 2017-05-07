import React, { Component } from 'react';
import { Header, Image, Segment, Container } from 'semantic-ui-react';

class SingleRecipe extends Component {

  componentWillMount() {
    this.props.requestRecipe(this.props.match.params.recipeId);
  }

  render() {
    const recipe = this.props.currRecipe;
    if (!recipe.hasOwnProperty('name')) {
      return (<p>Loading...</p>);
    }

    return (
      <div>
        <Header as="h1" textAlign="center" >{recipe.name}</Header>
        <Image src={recipe.imageUrl} size="medium" centered />
        <Segment.Group>
          {recipe.ingredients.map((ing, i) => <Segment key={i}>{ing}</Segment>)}
        </Segment.Group>
        <Container text>
          {recipe.description.split('\n').map((d, i) => <p key={i}>{d}</p>)}
        </Container>
      </div>
    );
  }
}

export default SingleRecipe;

