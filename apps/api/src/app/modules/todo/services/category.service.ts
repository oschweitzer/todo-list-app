import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
// eslint-disable-next-line import/no-unresolved
import { CrudService } from '@todo-list-app/crud';
// eslint-disable-next-line import/no-unresolved
import { CategoryEntity } from '@todo-list-app/models';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService extends CrudService<
  Repository<CategoryEntity>,
  CategoryEntity
> {
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly categoryRepository: Repository<CategoryEntity>,
  ) {
    super(categoryRepository);
  }
}
