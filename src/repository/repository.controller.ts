import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { RepositoryService } from './repository.service';

@Controller('repository')
export class RepositoryController {
  constructor(private readonly repositoryService: RepositoryService) {}

  @Get()
  findAll() {
    return this.repositoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    const repository = this.repositoryService.findOne(id);
    if (!repository) {
      throw new HttpException(
        `Not found the repository state with the id ${id}`,
        HttpStatus.NOT_FOUND,
      );
    }
    return repository;
  }
}
