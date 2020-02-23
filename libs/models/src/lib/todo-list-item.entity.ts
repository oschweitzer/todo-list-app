import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { TodoListEntity } from './todo-list.entity';

@Entity()
export class TodoListItemEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column({
    type: 'timestamp',
  })
  startDate: Date;

  @Column({
    type: 'timestamp',
  })
  endDate: Date;

  @Column({
    default: false,
  })
  isDone: boolean;

  @RelationId((todoList: TodoListItemEntity) => todoList.todoList)
  @Column()
  todoListId: number;

  @ManyToOne(
    type => TodoListEntity,
    todoList => todoList.items, {
      onDelete: 'CASCADE',
    }
  )
  todoList: TodoListEntity;
}
