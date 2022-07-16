import { Controller, Get, Param } from '@nestjs/common';
import { RepositoryService } from './repository.service';

@Controller('repository')
export class RepositoryController {
  constructor(private readonly repositoryService: RepositoryService) {}

  @Get()
  findAll() {
    return this.repositoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.repositoryService.findOne(+id);
  }
}
