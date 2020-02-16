import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataMessage } from '@todo-list-app/api-interfaces';
import { CategoryEntity } from '@todo-list-app/models';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TodoListCategoryService {
  constructor(private readonly httpClient: HttpClient) {}

  getAll(): Observable<CategoryEntity[]> {
    return this.httpClient
      .get<DataMessage<CategoryEntity>>(
        `${environment.api.baseUrl}/api/categories`,
      )
      .pipe(map(response => response.data));
  }
}
