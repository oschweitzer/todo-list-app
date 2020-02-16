import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { CategoryEntity } from '@todo-list-app/models';
import { Observable } from 'rxjs';
import { TodoListCategoryService } from '../../services/todo-list-category.service';

@Component({
  selector: 'todo-list-app-todo-list-creation-form',
  templateUrl: './todo-list-creation-form.component.html',
  styleUrls: ['./todo-list-creation-form.component.scss'],
  providers: [TodoListCategoryService],
})
export class TodoListCreationFormComponent implements OnInit {
  todoCreationForm;
  todoList: {
    category: string;
    name: string;
  } = { category: '', name: '' };

  categories$: Observable<CategoryEntity[]>;

  constructor(
    private readonly categoryService: TodoListCategoryService,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<TodoListCreationFormComponent>,
  ) {
    this.todoCreationForm = this.formBuilder.group({
      categorySelector: 'None',
      category: '',
      name: '',
    });
  }

  get categorySelector(): any {
    return this.todoCreationForm.get('categorySelector');
  }

  ngOnInit(): void {
    this.categories$ = this.categoryService.getAll();
  }

  submit() {
    this.dialogRef.close(this.todoCreationForm.value);
  }
}
