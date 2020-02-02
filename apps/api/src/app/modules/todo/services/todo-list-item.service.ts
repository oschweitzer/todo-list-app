import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
// eslint-disable-next-line import/no-unresolved
import { CrudService } from '@todo-list-app/crud';
// eslint-disable-next-line import/no-unresolved
import { TodoListItemEntity } from '@todo-list-app/models';
import { Repository } from 'typeorm';

@Injectable()
export class TodoListItemService extends CrudService<
  Repository<TodoListItemEntity>,
  TodoListItemEntity
> {
  constructor(
    @InjectRepository(TodoListItemEntity)
    private readonly todoListItemRepository,
  ) {
    super(todoListItemRepository);
  }
}
