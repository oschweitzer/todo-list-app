import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataMessage } from '@todo-list-app/api-interfaces';
import { CreateTodoListDto, TodoListEntity } from '@todo-list-app/models';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TodoListService {
  constructor(private readonly httpClient: HttpClient) {}

  getAll(): Observable<TodoListEntity[]> {
    return this.httpClient
      .get<DataMessage<TodoListEntity>>(
        `${environment.api.baseUrl}/api/todo-lists`,
      )
      .pipe(map(todoList => todoList.data));
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
