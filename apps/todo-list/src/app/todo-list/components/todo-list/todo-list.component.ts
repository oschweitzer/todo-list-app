import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList,
  ViewChildren,
  ViewContainerRef,
} from '@angular/core';
// eslint-disable-next-line import/no-unresolved
import { TodoListItemEntity } from '@todo-list-app/models';
import { Observable } from 'rxjs';
import { TodoListItemService } from '../../services/todo-list-item.service';
import { TodoListService } from '../../services/todo-list.service';
import { TodoListItemComponent } from '../todo-list-item/todo-list-item.component';

@Component({
  selector: 'todo-list-app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  providers: [TodoListService, TodoListItemService],
})
export class TodoListComponent implements OnInit {
  @Input() category: string;
  @Input() name: string;
  @Input() id: number; // ID of the list in the database
  @Output() remove = new EventEmitter();

  @ViewChildren(TodoListItemComponent, { read: ViewContainerRef })
  todoListItems: QueryList<ViewContainerRef>;
  todoListItems$: Observable<TodoListItemEntity[]>;

  constructor(
    private readonly todoListService: TodoListService,
    private readonly todoListItemService: TodoListItemService,
  ) {}

  ngOnInit(): void {
    this.todoListItems$ = this.todoListItemService._todoListItems;
    this.todoListItemService.getAllItemsFromList(this.id);
  }

  addNewItem(): void {
    this.todoListItemService
      .save({
        description: '',
        startDate: new Date(),
        endDate: new Date(),
        todoList: {
          id: this.id,
        },
      })
      .subscribe(() => this.todoListItemService.getAllItemsFromList(this.id));
  }

  removeList(): void {
    this.todoListService.remove(this.id).subscribe(response => {
      this.remove.emit();
    });
  }

  onRemoveItem(): void {
    this.todoListItemService.getAllItemsFromList(this.id);
  }
}
