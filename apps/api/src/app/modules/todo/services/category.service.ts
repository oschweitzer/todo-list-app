import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CrudService } from '@todo-list-app/crud';
import { CategoryEntity } from '@todo-list-app/models';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService extends CrudService<Repository<CategoryEntity>, CategoryEntity> {
  constructor(@InjectRepository(CategoryEntity) private readonly categoryRepository: Repository<CategoryEntity>) {
    super(categoryRepository);
  }
}


