import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
// eslint-disable-next-line import/no-unresolved
import { CrudService } from '@todo-list-app/crud';
// eslint-disable-next-line import/no-unresolved
import { TodoListEntity } from '@todo-list-app/models';
import { Repository } from 'typeorm';

@Injectable()
export class TodoListService extends CrudService<
  Repository<TodoListEntity>,
  TodoListEntity
> {
  constructor(
    @InjectRepository(TodoListEntity) private readonly todoListRepository,
  ) {
    super(todoListRepository);
  }
}
