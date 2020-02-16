import {
  ApplicationRef,
  Component,
  ComponentFactoryResolver,
  ElementRef,
  EmbeddedViewRef,
  Injector,
  Input,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { TodoListService } from '../../services/todo-list.service';
import { TodoListItemComponent } from '../todo-list-item/todo-list-item.component';

@Component({
  selector: 'todo-list-app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  providers: [TodoListService],
})
export class TodoListComponent {
  @Input() category: string;
  @Input() name: string;
  domElement: any; // self reference to this component in the DOM, used to remove element from the parent node.
  id: number; // ID of the list in the database

  @ViewChild('todoListItemsRef', { static: false })
  todoListItemsRef: ElementRef;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector,
    private renderer: Renderer2,
    private readonly todoListService: TodoListService,
  ) {}

  addNewItem(): void {
    // add new item component
    const componentRef = this.componentFactoryResolver
      .resolveComponentFactory(TodoListItemComponent)
      .create(this.injector);
    this.appRef.attachView(componentRef.hostView);
    const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;
    componentRef.instance.domElement = domElem;
    this.renderer.appendChild(this.todoListItemsRef.nativeElement, domElem);
  }

  removeList(): void {
    this.todoListService.remove(this.id).subscribe(response => {
      this.renderer.removeChild(
        this.renderer.parentNode(this.domElement),
        this.domElement,
      );
    });
  }
}
