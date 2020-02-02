import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { TodoListEntity } from './todo-list.entity';

@Entity()
export class CategoryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(
    type => TodoListEntity,
    todoList => todoList.categories,
  )
  todoLists: TodoListEntity[];
}
