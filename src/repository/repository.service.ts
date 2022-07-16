import { Injectable } from '@nestjs/common';
import repositoryDataMock from '../../data_mock_repository/repository.data.json';
@Injectable()
export class RepositoryService {
  findAll() {
    return repositoryDataMock;
  }

  findOne(id: number) {
    return repositoryDataMock.repositories.find((value) => value.id === id);
  }
}
