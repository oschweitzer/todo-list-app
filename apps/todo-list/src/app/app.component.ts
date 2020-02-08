import { HttpClient } from '@angular/common/http';
import {
  ApplicationRef,
  Component,
  ComponentFactoryResolver,
  ElementRef,
  EmbeddedViewRef,
  Injector,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material';
import { TodoListCreationFormComponent } from './todo-list/todo-list-creation-form/todo-list-creation-form.component';
import { TodoListComponent } from './todo-list/todo-list/todo-list.component';

// eslint-disable-next-line import/no-unresolved

@Component({
  selector: 'todo-list-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('todoListsRef', { static: false }) todoListRef: ElementRef;

  constructor(
    private http: HttpClient,
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector,
    private renderer: Renderer2,
    public dialog: MatDialog,
  ) {}

  createTodoList(category: string): void {
    const componentRef = this.componentFactoryResolver
      .resolveComponentFactory(TodoListComponent)
      .create(this.injector);
    componentRef.instance.category = category;
    this.appRef.attachView(componentRef.hostView);
    const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;
    this.renderer.appendChild(this.todoListRef.nativeElement, domElem);

    // call service to save the todo list and the category in the database
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(TodoListCreationFormComponent);
    dialogRef.afterClosed().subscribe(category => {
      if (category) {
        this.createTodoList(category);
      }
    });
  }
}
