import React, { Component } from 'react';
import { Header, Image, Segment, Container } from 'semantic-ui-react';
import PropTypes from 'prop-types';

export default class SingleRecipe extends Component {

  componentWillMount() {
    this.props.requestRecipe(this.props.match.params.recipeId);
  }

  render() {
    const recipe = this.props.currRecipe;
    if (!Object.prototype.hasOwnProperty.call(recipe, 'name')) {
      return (<p>Loading...</p>);
    }

    return (
      <div>
        <Header as="h1" textAlign="center" >{recipe.name}</Header>
        <Image src={recipe.imageUrl} size="medium" centered />
        <Segment.Group>
          { /* eslint-disable */ }
          {recipe.ingredients.map((ing, i) => <Segment key={i}>{ing}</Segment>)}
        </Segment.Group>
        <Container text>
          {recipe.description.split('\n').map((d, i) => <p key={i}>{d}</p>)}
          { /* eslint-enable */ }
        </Container>
      </div>
    );
  }
}

SingleRecipe.defaultProps = {
  requestRecipe: () => ({}),
  currRecipe: {},
};

SingleRecipe.propTypes = {
  requestRecipe: PropTypes.func,
  currRecipe: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
  match: PropTypes.shape({
    params: PropTypes.shape({
      recipeId: PropTypes.string,
    }),
  }).isRequired,
};

