import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import { CrudService } from '@todo-list-app/crud';
import { TodoListItemEntity } from '@todo-list-app/models';
import { Repository } from 'typeorm';

@Injectable()
export class TodoListItemService extends CrudService<Repository<TodoListItemEntity>, TodoListItemEntity> {
  constructor(@InjectRepository(TodoListItemEntity) todoListItemRepository) {
    super(todoListItemRepository);
  }
}
