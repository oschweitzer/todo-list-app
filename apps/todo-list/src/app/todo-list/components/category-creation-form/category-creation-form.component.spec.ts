import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryCreationFormComponent } from './category-creation-form.component';

describe('CategoryCreationFormComponent', () => {
  let component: CategoryCreationFormComponent;
  let fixture: ComponentFixture<CategoryCreationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryCreationFormComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryCreationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
