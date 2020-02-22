import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// eslint-disable-next-line import/no-unresolved
import { DataMessage } from '@todo-list-app/api-interfaces';
// eslint-disable-next-line import/no-unresolved
import { CreateTodoListDto, TodoListEntity } from '@todo-list-app/models';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TodoListService {
  _todoLists: BehaviorSubject<TodoListEntity[]> = new BehaviorSubject<
    TodoListEntity[]
  >([]);

  constructor(private readonly httpClient: HttpClient) {}

  getAll(): Subscription {
    return this.httpClient
      .get<DataMessage<TodoListEntity>>(
        `${environment.api.baseUrl}/api/todo-lists`,
      )
      .pipe(map(todoList => todoList.data))
      .subscribe(todoList => this._todoLists.next(todoList));
  }

  save(todoList: CreateTodoListDto): Observable<DataMessage<TodoListEntity>> {
    return this.httpClient.post<DataMessage<TodoListEntity>>(
      `${environment.api.baseUrl}/api/todo-lists`,
      todoList,
    );
  }

  remove(id: number): Observable<DataMessage<TodoListEntity>> {
    return this.httpClient.delete<DataMessage<TodoListEntity>>(
      `${environment.api.baseUrl}/api/todo-lists/${id}`,
    );
  }
}
