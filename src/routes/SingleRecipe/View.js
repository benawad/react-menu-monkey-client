import React, { Component } from 'react';
import { Header, Image, Segment, Container } from 'semantic-ui-react';

class SingleRecipe extends Component {

  componentWillMount() {
    console.log(this.props.match.params.recipeId);
    this.props.requestRecipe({
      query: {
        $limit: 1,
        _id: this.props.match.params.recipeId,
      },
    });
  }

  render() {
    const recipe = this.props.currRecipe;
    if (!recipe.hasOwnProperty('name')) {
      return (<p>Loading...</p>);
    }

    return (
      <div>
        <Header as="h1" textAlign="center" >{recipe.name}</Header>
        <Image src={recipe.imageURL} size="medium" centered />
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

