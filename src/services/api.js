export function getRecentRecipes(app) {
  const recipes = app.service('recipes');
  return recipes.get().then((data, err) => data.data);
}

export function signup(app, username, password) {
  const users = app.service('users');
  return users.create({username, password}).then((data, err) => data);
}

export function login(app, username, password) {
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

