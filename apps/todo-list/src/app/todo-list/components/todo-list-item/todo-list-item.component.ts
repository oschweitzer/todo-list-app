import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'todo-list-app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss'],
})
export class TodoListItemComponent {
  todoItemForm;
  validated = false;
  created = false;
  domElement: any; // self reference to this component in the DOM, used to remove element from the parent node.

  @ViewChild('todoText', { static: false }) todoText: ElementRef;

  constructor(private formBuilder: FormBuilder, private renderer: Renderer2) {
    this.todoItemForm = this.formBuilder.group({
      todo: '',
    });
  }

  removeTodoItem(): void {
    // call service to remove from database
    this.renderer.removeChild(
      this.renderer.parentNode(this.domElement),
      this.domElement,
    );
  }

  validateTodoItem(): void {
    // Call service to record item to the database
    this.validated = !this.validated;
    if (this.validated) {
      this.todoItemForm.get('todo').disable();
      this.todoText.nativeElement.style.textDecoration = 'line-through';
    } else {
      this.todoItemForm.get('todo').enable();
      this.todoText.nativeElement.style.textDecoration = 'none';
    }
  }

  createTodoItem(): void {
    this.created = !this.created;
    if (this.created) {
      this.todoItemForm.get('todo').disable();
    } else {
      this.todoItemForm.get('todo').enable();
    }
  }
}
