import { Injectable } from '@nestjs/common';
import repositoryDataMock from '../../data_mock_repository/repository.data.json';
@Injectable()
export class RepositoryService {
  findAll() {
    return repositoryDataMock.repositories;
  }

  findOne(id: number) {
    const repository = repositoryDataMock.repositories.find(
      (value) => value.id === id,
    );
    return repository ? repository : {};
  }
}
