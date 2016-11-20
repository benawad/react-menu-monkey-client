import superagent from 'superagent';
import feathers from 'feathers-client';
import rest from 'feathers-rest/client';

export const host = 'http://localhost:3030';

export function getRecentRecipes() {
  const app = feathers()
  .configure(rest(host).superagent(superagent));
  const recipes = app.service('recipes');
  return recipes.get().then((data, err) => data.data);
}

export function signup(username, password) {
  const app = feathers()
  .configure(rest(host).superagent(superagent));
  const users = app.service('users');
  return users.create({username, password}).then((data, err) => data);
}

