import superagent from 'superagent';
import feathers from 'feathers-client';
import rest from 'feathers-rest/client';

export function getRecentRecipes() {
  const host = 'http://localhost:3030';
  const app = feathers()
  .configure(rest(host).superagent(superagent));
  const recipes = app.service('recipes');
  return recipes.get().then((data, err) => data.data);
}

