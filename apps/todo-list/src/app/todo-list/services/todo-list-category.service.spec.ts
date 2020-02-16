import { TestBed } from '@angular/core/testing';

import { TodoListCategoryService } from './todo-list-category.service';

describe('TodoListCategoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodoListCategoryService = TestBed.get(
      TodoListCategoryService,
    );
    expect(service).toBeTruthy();
  });
});
