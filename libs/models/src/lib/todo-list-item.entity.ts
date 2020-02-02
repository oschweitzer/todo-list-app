import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
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

  @Column()
  isDone: boolean;

  @ManyToOne(
    type => TodoListEntity,
    todoList => todoList.items,
  )
  todoList: TodoListEntity;
}
