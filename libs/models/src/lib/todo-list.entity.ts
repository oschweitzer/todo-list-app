import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CategoryEntity } from './category.entity';
import { TodoListItemEntity } from './todo-list-item.entity';

@Entity()
export class TodoListEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name?: string;

  @OneToMany(
    type => TodoListItemEntity,
    item => item.todoList,
    {
      eager: true,
    },
  )
  items?: TodoListItemEntity[];

  @ManyToMany(
    type => CategoryEntity,
    category => category.todoLists,
    {
      eager: true,
    },
  )
  @JoinTable()
  categories?: CategoryEntity[];
}
