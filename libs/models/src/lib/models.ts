import { CategoryEntity } from './category.entity';
import { TodoListEntity } from './todo-list.entity';

export interface CreateCategoryDto {
  name: string;
}

export interface UpdateCategoryDto {
  name?: string;
}

export interface CreateTodoListDto {
  name: string;
  categories: CategoryEntity[];
}

export interface UpdateTodoListDto {
  name?: string;
}

export interface CreateTodoListItemDto {
  description: string;
  startDate: Date;
  endDate: Date;
  isDone?: boolean;
  todoList: TodoListEntity;
}

export interface UpdateTodoListItemDto {
  description?: string;
  startDate?: Date;
  endDate?: Date;
  isDone?: boolean;
  todoList?: TodoListEntity;
}
