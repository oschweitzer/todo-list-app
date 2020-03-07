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
  disableBtn = true;
  enableEdition = false;

  constructor(
    private cdr: ChangeDetectorRef,
    private readonly categoryService: TodoListCategoryService,
    private formBuilder: FormBuilder,
  ) {
    this.categoryManagementForm = this.formBuilder.group({
      category: {},
      categoryEdition: '',
    });
  }

  ngOnInit(): void {
    this.categories$ = this.categoryService.getAll();
  }

  onCategorySelection(event): void {
    console.log(event);
    this.disableBtn = !event.value;
  }

  editCategory(): void {
    this.categoryService
      .update(this.categoryManagementForm.get('category').value.id, {
        name: this.categoryManagementForm.get('categoryEdition').value,
      })
      .subscribe(response => {
        this.categories$ = this.categoryService.getAll();
        this.enableEdition = false;
        this.disableBtn = true;
        this.categoryManagementForm.reset();
      });
  }

  deleteCategory(): void {
    this.categoryService
      .remove(this.categoryManagementForm.get('category').value.id)
      .subscribe(() => {
        this.categories$ = this.categoryService.getAll();
      });
  }
}
