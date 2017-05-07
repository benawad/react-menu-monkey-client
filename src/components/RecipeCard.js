import React from 'react';
import { Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const RecipeCard = ({ _id, name, imageUrl, description }, i) => (
  <Link key={_id} to={`/view/${_id}`}>
    <Card
      centered
      image={imageUrl}
      header={name}
      meta="Description"
      description={`${description.substring(0, 100)}...`}
    />
  </Link>
);

export default RecipeCard;
