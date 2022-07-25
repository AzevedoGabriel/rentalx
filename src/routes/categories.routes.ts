/* eslint-disable import/prefer-default-export */
import { Router } from 'express';
import { createCategoryController } from '../modules/cars/useCases/createCategory';
import { listCategoriesControler } from '../modules/cars/useCases/listCategories';

const categoriesRoutes = Router();

categoriesRoutes.post('/', (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.get('/', (request, response) => {
  return listCategoriesControler.handle(request, response);
});

export { categoriesRoutes };
