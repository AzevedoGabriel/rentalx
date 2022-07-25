import { ICategoriesRepository } from '../repositories/ICategoriesRepository';
import { ISpecificationRepository } from '../repositories/ISpecificationRepository';

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationService {
  constructor(private specificationRepository: ISpecificationRepository) {}

  execute({ description, name }: IRequest) {
    const specificationAlreadyExists =
      this.specificationRepository.findByName(name);

    if (specificationAlreadyExists) {
      throw new Error('Specification Already Exists!');
    }

    this.specificationRepository.create({ name, description });
  }
}

export { CreateSpecificationService };
