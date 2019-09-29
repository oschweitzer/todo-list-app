import {Component, Input, OnInit} from '@angular/core';
import {TodoLineComponent} from '../todo-line/todo-line.component';

@Component({
  selector: 'todo-list-workspace-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() title: string;
  todoLineComponents: TodoLineComponent[];

  constructor() {

  }

  ngOnInit() {
    this.todoLineComponents = [];
  }

  addTodoLine() {
    this.todoLineComponents.push(new TodoLineComponent());
  }
  removeTodoLine(el) {
    console.log(el);

  }

}
