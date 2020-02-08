import { Component } from '@angular/core';

@Component({
  selector: 'todo-list-app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss'],
})
export class TodoListItemComponent {
  todoItem: string;

  createTodoItem(): void {
    // Call service to record item to the database
  }
}
