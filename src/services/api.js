export function getRecentRecipes(app) {
  const recipes = app.service('recipes');
  return recipes.find(
    {
      query: {'$sort': {'createdAt': -1}}
    }
  ).then((data, err) => data.data);
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

export function createRecipe(app, name, steps, imageURL) {
  return app.authenticate().then(() => {
    const recipes = app.service('recipes');
    return recipes.create({name, steps, imageURL}).then((data, err) => data);
  });
}

