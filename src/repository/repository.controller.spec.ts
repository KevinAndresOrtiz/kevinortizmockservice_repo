import { Test, TestingModule } from '@nestjs/testing';
import { RepositoryController } from './repository.controller';
import { RepositoryService } from './repository.service';

describe('RepositoryController', () => {
  let controller: RepositoryController;
  let result;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RepositoryController],
      providers: [RepositoryService],
    }).compile();

    controller = module.get<RepositoryController>(RepositoryController);
    result = {
      repositories: [
        {
          id: 1,
          state: 604,
        },
        {
          id: 2,
          state: 605,
        },
        {
          id: 3,
          state: 606,
        },
      ],
    };
  });

  it('should get all repositories', () => {
    expect(controller.findAll().length).toStrictEqual(
      result.repositories.length,
    );
    expect(controller.findAll()).toEqual(
      expect.arrayContaining([expect.objectContaining(result.repositories[0])]),
    );
  });
  it('should return an repository state if the method send an id parameter', () => {
    expect(controller.findOne(1)).toStrictEqual(
      result.repositories.find((val) => val.id == 1),
    );
    expect(controller.findOne(2)).toStrictEqual(
      result.repositories.find((val) => val.id == 2),
    );
  });
});
