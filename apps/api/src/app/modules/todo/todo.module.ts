import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import { CategoryEntity, TodoListEntity, TodoListItemEntity } from '@todo-list-app/models';
import {CategoryController} from './controllers/category.controller';
import {TodoListItemController} from './controllers/todo-list-item.controller';
import {TodoListController} from './controllers/todo-list.controller';
import {CategoryService} from './services/category.service';
import {TodoListItemService} from './services/todo-list-item.service';
import {TodoListService} from './services/todo-list.service';

@Module({
  imports: [
    TypeOrmModule.forFeature(
      [
        TodoListEntity,
        CategoryEntity,
        TodoListItemEntity,
      ]),
  ],
  controllers: [
    CategoryController,
    TodoListItemController,
    TodoListController,
  ],
  providers: [
    CategoryService,
    TodoListItemService,
    TodoListService,
  ],
  exports: [
    CategoryService,
    TodoListItemService,
    TodoListService,
  ],
})
export class TodoModule {}
