import { Test, TestingModule } from '@nestjs/testing';
import { RepositoryService } from './repository.service';

describe('RepositoryService', () => {
  let service: RepositoryService;
  let result;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RepositoryService],
    }).compile();

    service = module.get<RepositoryService>(RepositoryService);
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

  it('should be return all the repositories ', () => {
    expect(service.findAll().length).toStrictEqual(result.repositories.length);
    expect(service.findAll()).toEqual(
      expect.arrayContaining([expect.objectContaining(result.repositories[0])]),
    );
  });
  it('should return an repository state if the method send an id parameter', () => {
    expect(service.findOne(1)).toStrictEqual(
      result.repositories.find((val) => val.id == 1),
    );
    expect(service.findOne(2)).toStrictEqual(
      result.repositories.find((val) => val.id == 2),
    );
  });

  it('should return an empty response whether you send an id does not exist', () => {
    expect(service.findOne(5)).toStrictEqual({});
  });
});
