/* eslint-disable import/prefer-default-export */
/* eslint-disable no-useless-constructor */
import { ISpecificationRepository } from '../../repositories/ISpecificationRepository';

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationUseCases {
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

export { CreateSpecificationUseCases };
