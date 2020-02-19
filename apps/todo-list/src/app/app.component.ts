import { HttpClient } from '@angular/common/http';
import {
  ApplicationRef,
  Component,
  ComponentFactoryResolver,
  ElementRef,
  EmbeddedViewRef,
  Injector,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material';
import { CategoryEntity, TodoListEntity } from '@todo-list-app/models';
import { Observable } from 'rxjs';
import { CategoryCreationFormComponent } from './todo-list/components/category-creation-form/category-creation-form.component';
import { TodoListCreationFormComponent } from './todo-list/components/todo-list-creation-form/todo-list-creation-form.component';
import { TodoListComponent } from './todo-list/components/todo-list/todo-list.component';
import { TodoListCategoryService } from './todo-list/services/todo-list-category.service';
import { TodoListService } from './todo-list/services/todo-list.service';

// eslint-disable-next-line import/no-unresolved

@Component({
  selector: 'todo-list-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [TodoListService, TodoListCategoryService],
})
export class AppComponent implements OnInit {
  @ViewChild('todoListsRef', { static: false }) todoListRef: ElementRef;
  todoLists$: Observable<TodoListEntity[]>;

  constructor(
    private http: HttpClient,
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector,
    private renderer: Renderer2,
    public dialog: MatDialog,
    private readonly todoListService: TodoListService,
    private readonly categoryService: TodoListCategoryService,
  ) {}

  ngOnInit(): void {
    this.todoLists$ = this.todoListService.getAll();
  }

  createTodoList(todoList: {
    category: CategoryEntity;
    name: string;
  }): void {
    this.todoListService
      .save({ name: todoList.name, categories: [todoList.category] })
      .subscribe(response => {
        const componentRef = this.componentFactoryResolver
          .resolveComponentFactory(TodoListComponent)
          .create(this.injector);
        this.appRef.attachView(componentRef.hostView);
        const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
          .rootNodes[0] as HTMLElement;
        componentRef.instance.category = todoList.category.name;
        componentRef.instance.name = todoList.name;
        componentRef.instance.domElement = domElem;
        componentRef.instance.id = response.data[0].id;
        this.renderer.appendChild(this.todoListRef.nativeElement, domElem);
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
}
