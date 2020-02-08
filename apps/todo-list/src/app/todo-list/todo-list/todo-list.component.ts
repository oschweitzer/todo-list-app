import { Component, Input } from '@angular/core';

@Component({
  selector: 'todo-list-app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  @Input() category: string;

  addNewItem(): void {
    // add new item component
  }
}
