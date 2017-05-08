import React from 'react';
import { Card } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

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

export default withRouter(RecipeCard);
