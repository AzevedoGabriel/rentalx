/* eslint-disable import/prefer-default-export */
import { CategoriesRepository } from '../../repositories/CategoriesRepository';
import { ListCategoriesControler } from './ListCategoriesController';
import { ListCategoriesUseCase } from './ListCategoriesUseCase';

const categoriesRepository = new CategoriesRepository();

const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);

const listCategoriesControler = new ListCategoriesControler(
  listCategoriesUseCase,
);

export { listCategoriesControler };
