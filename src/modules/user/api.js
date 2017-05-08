import { app, usersService } from '../index';

export async function signup(payload) {
  try {
    return await usersService.create(payload);
  } catch (err) {
    return {};
  }
}

/*
payload = {
  email: 'bob',
  password: 'mypass',
};
*/
export async function login(payload) {
  try {
    return await app.authenticate({
      strategy: 'local',
      ...payload,
    });
  } catch (err) {
    return {};
  }
}

export function logout() {
  return app.logout();
}

export async function auth() {
  try {
    const token = localStorage.getItem('feathers-jwt');
    const payload = await app.passport.verifyJWT(token);
    const user = await usersService.get(payload.userId);
    return user;
  } catch (err) {
    return {};
  }
}
