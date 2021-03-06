import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// eslint-disable-next-line import/no-unresolved
import { DataMessage } from '@todo-list-app/api-interfaces';
import {
  CategoryEntity,
  CreateCategoryDto,
  UpdateCategoryDto,
  // eslint-disable-next-line import/no-unresolved
} from '@todo-list-app/models';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TodoListCategoryService {
  constructor(private readonly httpClient: HttpClient) {}

  getAll(filter?: string): Observable<CategoryEntity[]> {
    return this.httpClient
      .get<DataMessage<CategoryEntity>>(
        `${environment.api.baseUrl}/api/categories${
          filter ? '?_filters=' + filter : ''
        }`,
      )
      .pipe(map(response => response.data));
  }

  checkIfExists(category: CreateCategoryDto): Observable<CategoryEntity[]> {
    return this.getAll(`name:${category.name}`);
  }

  save(category: CreateCategoryDto): Observable<CategoryEntity[]> {
    return this.httpClient
      .post<DataMessage<CategoryEntity>>(
        `${environment.api.baseUrl}/api/categories`,
        category,
      )
      .pipe(map(response => response.data));
  }

  update(
    id: number,
    category: UpdateCategoryDto,
  ): Observable<CategoryEntity[]> {
    return this.httpClient
      .patch<DataMessage<CategoryEntity>>(
        `${environment.api.baseUrl}/api/categories/${id}`,
        category,
      )
      .pipe(map(response => response.data));
  }

  remove(id: number): Observable<DataMessage<CategoryEntity>> {
    return this.httpClient.delete<DataMessage<CategoryEntity>>(
      `${environment.api.baseUrl}/api/categories/${id}`,
    );
  }
}
