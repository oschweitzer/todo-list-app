import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import {TodoListEntity} from './todo-list.entity';

@Entity()
export class TodoListItemEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column({
    type: 'date'
  })
  startDate: Date;

  @Column({
    type: 'date'
  })
  endDate: Date;

  @Column()
  isDone: boolean;

  @ManyToOne(type => TodoListEntity, todoList => todoList.items)
  todoList: TodoListEntity;
}
