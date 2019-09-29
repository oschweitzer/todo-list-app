import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoLineComponent } from './todo-line.component';

describe('TodoLineComponent', () => {
  let component: TodoLineComponent;
  let fixture: ComponentFixture<TodoLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
