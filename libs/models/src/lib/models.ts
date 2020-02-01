import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

export interface CreateCategoryDto {
  name: string;
}

export interface UpdateCategoryDto {
  name?: string;
}

export interface CreateTodoListDto {
  name: string;
}

export interface UpdateTodoListDto {
  name?: string;
}

export interface CreateTodoListItemDto {
  description: string;
  startDate: Date;
  endDate: Date;
  isDone: boolean;
  todoList: TodoListEntity;
}

export interface UpdateTodoListItemDto {
  description?: string;
  startDate?: Date;
  endDate?: Date;
  isDone?: boolean;
  todoList?: TodoListEntity;
}

@Entity()
export class TodoListEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(type => TodoListItemEntity, item => item.todoList)
  items: TodoListItemEntity[];

  @ManyToMany(type => CategoryEntity, category => category.todoLists)
  @JoinTable()
  categories: CategoryEntity[];

}

@Entity()
export class CategoryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(type => TodoListEntity, todoList => todoList.categories)
  todoLists: TodoListEntity[];
}

@Entity()
export class TodoListItemEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column({
    type: 'timestamp'
  })
  startDate: Date;

  @Column({
    type: 'timestamp'
  })
  endDate: Date;

  @Column()
  isDone: boolean;

  @ManyToOne(type => TodoListEntity, todoList => todoList.items)
  todoList: TodoListEntity;
}
