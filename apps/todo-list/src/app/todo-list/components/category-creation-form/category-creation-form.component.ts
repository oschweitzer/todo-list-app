import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { TodoListCategoryService } from '../../services/todo-list-category.service';

@Component({
  selector: 'todo-list-app-category-creation-form',
  templateUrl: './category-creation-form.component.html',
  styleUrls: ['./category-creation-form.component.scss'],
})
export class CategoryCreationFormComponent {
  categoryCreationForm;
  constructor(
    private readonly categoryService: TodoListCategoryService,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<CategoryCreationFormComponent>,
  ) {
    this.categoryCreationForm = this.formBuilder.group({
      name: ['', Validators.required],
    });
  }

  submit(): void {
    this.dialogRef.close(this.categoryCreationForm.value);
  }
}
