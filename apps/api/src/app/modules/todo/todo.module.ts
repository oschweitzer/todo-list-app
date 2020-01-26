import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {CategoryEntity} from './entities/category.entity';
import {TodoListItemEntity} from './entities/todo-list-item.entity';
import {TodoListEntity} from './entities/todo-list.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature(
      [
        TodoListEntity,
        CategoryEntity,
        TodoListItemEntity,
      ]),
  ]
})
export class TodoModule {}
