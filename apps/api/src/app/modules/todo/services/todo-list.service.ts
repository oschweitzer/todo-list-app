import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import { CrudService } from '@todo-list-app/crud';
import { TodoListEntity } from '@todo-list-app/models';
import { Repository } from 'typeorm';

@Injectable()
export class TodoListService extends CrudService<Repository<TodoListEntity>, TodoListEntity> {
  constructor(@InjectRepository(TodoListEntity) todoListRepository) {
    super(todoListRepository);
  }
}
