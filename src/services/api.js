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

export function login(username, password) {
  const app = feathers()
  .configure(rest(host).superagent(superagent))
  .configure(feathers.hooks())
  .configure(feathers.authentication({ storage: window.localStorage }));
  return app.authenticate({
    type: 'local',
    'email': username,
    'password': password
  }).then(function(result){
    console.log('Authenticated!', result);
  }).catch(function(error){
    console.error('Error authenticating!', error);
  });
}

