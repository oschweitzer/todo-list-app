import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
// eslint-disable-next-line import/no-unresolved
import { CategoryEntity } from '@todo-list-app/models';
import { Observable } from 'rxjs';
import { TodoListCategoryService } from '../../services/todo-list-category.service';

@Component({
  selector: 'todo-list-app-category-management',
  templateUrl: './category-management.component.html',
  styleUrls: ['./category-management.component.scss'],
  providers: [TodoListCategoryService],
})
export class CategoryManagementComponent implements OnInit {
  categoryManagementForm;
  categories$: Observable<CategoryEntity[]>;
  disableBtn = false;

  constructor(
    private cdr: ChangeDetectorRef,
    private readonly categoryService: TodoListCategoryService,
    private formBuilder: FormBuilder,
  ) {
    this.categoryManagementForm = this.formBuilder.group({
      category: {},
    });
  }

  ngOnInit(): void {
    this.categories$ = this.categoryService.getAll();
  }

  onCategorySelection(event): void {
    this.disableBtn = !!event.value;
  }

  editCategory(): void {
    // update
  }

  deleteCategory(): void {
    this.categoryService
      .remove(this.categoryManagementForm.get('category').value.id)
      .subscribe(() => {
        this.categories$ = this.categoryService.getAll();
      });
  }
}
