import { HttpClient } from '@angular/common/http';
import {
  Component,
  OnInit,
  QueryList,
  ViewChildren,
  ViewContainerRef,
} from '@angular/core';
import { MatDialog } from '@angular/material';
// eslint-disable-next-line import/no-unresolved
import { CategoryEntity, TodoListEntity } from '@todo-list-app/models';
import { Observable } from 'rxjs';
import { CategoryCreationFormComponent } from './todo-list/components/category-creation-form/category-creation-form.component';
import { TodoListCreationFormComponent } from './todo-list/components/todo-list-creation-form/todo-list-creation-form.component';
import { TodoListComponent } from './todo-list/components/todo-list/todo-list.component';
import { TodoListCategoryService } from './todo-list/services/todo-list-category.service';
import { TodoListService } from './todo-list/services/todo-list.service';

@Component({
  selector: 'todo-list-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [TodoListService, TodoListCategoryService],
})
export class AppComponent implements OnInit {
  @ViewChildren(TodoListComponent, { read: ViewContainerRef })
  todoLists: QueryList<ViewContainerRef>;
  todoLists$: Observable<TodoListEntity[]>;

  constructor(
    private http: HttpClient,
    public dialog: MatDialog,
    private readonly todoListService: TodoListService,
    private readonly categoryService: TodoListCategoryService,
  ) {}

  ngOnInit(): void {
    this.todoLists$ = this.todoListService._todoLists;
    this.todoListService.getAll();
  }

  createTodoList(todoList: { category: CategoryEntity; name: string }): void {
    this.todoListService
      .save({ name: todoList.name, categories: [todoList.category] })
      .subscribe(response => {
        this.todoListService.getAll();
      });
  }

  createCategory(category: { name: string }): void {
    this.categoryService.save(category).subscribe();
  }

  openCreateTodoListForm(): void {
    const dialogRef = this.dialog.open(TodoListCreationFormComponent, {
      width: '50%',
    });
    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        this.createTodoList(data);
      }
    });
  }

  openCreateCategoryForm(): void {
    const dialogRef = this.dialog.open(CategoryCreationFormComponent, {
      width: '50%',
    });
    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        this.createCategory(data);
      }
    });
  }

  onRemove(): void {
    this.todoListService.getAll();
  }
}
