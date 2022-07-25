/* eslint-disable import/prefer-default-export */
import { CategoriesRepository } from '../../repositories/CategoriesRepository';
import { ListCategoriesControler } from './ListCategoriesController';
import { ListCategoriesUseCase } from './ListCategoriesUseCase';

const categoriesRepository = CategoriesRepository.getInstace();

const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);

const listCategoriesControler = new ListCategoriesControler(
  listCategoriesUseCase,
);

export { listCategoriesControler };
