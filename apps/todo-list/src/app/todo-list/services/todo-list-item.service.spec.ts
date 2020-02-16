import { TestBed } from '@angular/core/testing';

import { TodoListItemService } from './todo-list-item.service';

describe('TodoListItemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodoListItemService = TestBed.get(TodoListItemService);
    expect(service).toBeTruthy();
  });
});
