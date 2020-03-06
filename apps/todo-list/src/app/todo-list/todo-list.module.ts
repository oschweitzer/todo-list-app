import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatTooltipModule,
} from '@angular/material';
import { CategoryCreationFormComponent } from './components/category-creation-form/category-creation-form.component';
import { TodoListCreationFormComponent } from './components/todo-list-creation-form/todo-list-creation-form.component';
import { TodoListItemComponent } from './components/todo-list-item/todo-list-item.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

@NgModule({
  declarations: [
    TodoListComponent,
    TodoListItemComponent,
    TodoListCreationFormComponent,
    CategoryCreationFormComponent,
  ],
  exports: [TodoListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatTooltipModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  entryComponents: [
    TodoListComponent,
    TodoListCreationFormComponent,
    TodoListItemComponent,
    CategoryCreationFormComponent,
  ],
})
export class TodoListModule {}
