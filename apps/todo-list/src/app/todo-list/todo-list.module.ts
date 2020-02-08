import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatTooltipModule,
} from '@angular/material';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListCreationFormComponent } from './todo-list-creation-form/todo-list-creation-form.component';

@NgModule({
  declarations: [
    TodoListComponent,
    TodoListItemComponent,
    TodoListCreationFormComponent,
  ],
  exports: [TodoListComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatTooltipModule,
    FormsModule,
  ],
  entryComponents: [TodoListComponent, TodoListCreationFormComponent],
})
export class TodoListModule {}
