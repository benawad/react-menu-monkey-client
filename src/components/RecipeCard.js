import React from 'react';
import { Card } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const RecipeCard = ({ _id, name, imageUrl, description, history }) => (
  <Card
    centered
    image={imageUrl}
    header={name}
    meta="Description"
    description={`${description.substring(0, 100)}...`}
    onClick={() => history.push(`/view/${_id}`)}
    key={_id}
  />
);

RecipeCard.defaultProps = {
  history: {},
};

RecipeCard.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};

export default withRouter(RecipeCard);
