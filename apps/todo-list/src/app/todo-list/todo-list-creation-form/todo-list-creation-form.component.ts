import { Component } from '@angular/core';

@Component({
  selector: 'todo-list-app-todo-list-creation-form',
  templateUrl: './todo-list-creation-form.component.html',
  styleUrls: ['./todo-list-creation-form.component.scss'],
})
export class TodoListCreationFormComponent {
  category: string;
}
