import React from 'react';
import { Card } from 'semantic-ui-react'
import { browserHistory, Link } from 'react-router';

const RecipeCard = ({ _id, name, imageURL, description }, i) => (
  <Card
    centered   
    image={imageURL}
    header={name}
    meta='Description'
    description={`${description.substring(0, 100)}...`}
    key={i}
    onClick={() => browserHistory.push(`/view/${_id}`)}
  />
);

export default RecipeCard;
