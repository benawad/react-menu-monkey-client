import { recipesService } from '../index';

export async function findRecipes(payload) {
  try {
    return await recipesService.find(payload);
  } catch (err) {
    return [];
  }
}

export async function getRecipe(payload) {
  try {
    return await recipesService.get(payload);
  } catch (err) {
    return {};
  }
}

export async function createRecipe(payload) {
  try {
    return await recipesService.create(payload);
  } catch (err) {
    return {};
  }
}
