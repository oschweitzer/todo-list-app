import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// eslint-disable-next-line import/no-unresolved
import { DataMessage } from '@todo-list-app/api-interfaces';

import {
  CreateTodoListItemDto,
  TodoListItemEntity,
  UpdateTodoListItemDto,
  // eslint-disable-next-line import/no-unresolved
} from '@todo-list-app/models';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TodoListItemService {
  _todoListItems: BehaviorSubject<TodoListItemEntity[]> = new BehaviorSubject<
    TodoListItemEntity[]
  >([]);

  constructor(private readonly httpClient: HttpClient) {}

  getAll(): Subscription {
    return this.httpClient
      .get<DataMessage<TodoListItemEntity>>(
        `${environment.api.baseUrl}/api/todo-list-items`,
      )
      .pipe(map(todoList => todoList.data))
      .subscribe(todoList => this._todoListItems.next(todoList));
  }

  getAllItemsFromList(todoListId: number): Subscription {
    return this.httpClient
      .get<DataMessage<TodoListItemEntity>>(
        `${environment.api.baseUrl}/api/todo-list-items/todo-list/${todoListId}`,
      )
      .pipe(map(todoList => todoList.data))
      .subscribe(todoList => this._todoListItems.next(todoList));
  }

  save(
    todoListItem: CreateTodoListItemDto,
  ): Observable<DataMessage<TodoListItemEntity>> {
    return this.httpClient.post<DataMessage<TodoListItemEntity>>(
      `${environment.api.baseUrl}/api/todo-list-items`,
      todoListItem,
    );
  }

  update(
    todoListItemId: number,
    todoListItem: UpdateTodoListItemDto,
  ): Observable<DataMessage<TodoListItemEntity>> {
    return this.httpClient.patch<DataMessage<TodoListItemEntity>>(
      `${environment.api.baseUrl}/api/todo-list-items/${todoListItemId}`,
      todoListItem,
    );
  }

  remove(id: number): Observable<DataMessage<TodoListItemEntity>> {
    return this.httpClient.delete<DataMessage<TodoListItemEntity>>(
      `${environment.api.baseUrl}/api/todo-list-items/${id}`,
    );
  }
}
