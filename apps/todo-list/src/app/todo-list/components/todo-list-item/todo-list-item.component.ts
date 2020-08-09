import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TodoListItemService } from '../../services/todo-list-item.service';

@Component({
  selector: 'todo-list-app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss'],
  providers: [TodoListItemService],
})
export class TodoListItemComponent implements OnInit, AfterViewInit {
  @Output() removeItem = new EventEmitter();
  @Input() id: number;
  @Input() description: string;
  @Input() isDone: boolean;
  todoItemForm;
  validated = false;
  created = false;

  @ViewChild('todoText') todoText: ElementRef;

  constructor(
    private formBuilder: FormBuilder,
    private readonly todoListItemService: TodoListItemService,
  ) {
    this.todoItemForm = this.formBuilder.group({
      todo: '',
      creationButton: '',
    });
  }

  ngOnInit(): void {
    this.todoItemForm.get('todo').setValue(this.description);
    this.validated = this.isDone;
    this.created = !!this.description;
    this.created
      ? this.todoItemForm.get('todo').disable()
      : this.todoItemForm.get('todo').enable();
  }

  ngAfterViewInit(): void {
    this.todoText.nativeElement.style.textDecoration = this.validated
      ? 'line-through'
      : 'none';
  }

  createTodoItem(): void {
    this.todoListItemService
      .update(this.id, {
        description: this.todoItemForm.get('todo').value,
      })
      .subscribe(() => {
        this.created = !this.created;
        this.created
          ? this.todoItemForm.get('todo').disable()
          : this.todoItemForm.get('todo').enable();
      });
  }

  validateTodoItem(): void {
    this.todoListItemService
      .update(this.id, {
        isDone: !this.validated,
      })
      .subscribe(() => {
        this.validated = !this.validated;
        this.todoText.nativeElement.style.textDecoration = this.validated
          ? 'line-through'
          : 'none';
        this.validated
          ? this.todoItemForm.get('creationButton').disable()
          : this.todoItemForm.get('creationButton').enable();
      });
  }

  removeTodoItem(): void {
    this.todoListItemService
      .remove(this.id)
      .subscribe(() => this.removeItem.emit());
  }
}
