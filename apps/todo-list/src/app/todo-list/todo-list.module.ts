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
  MatListModule,
  MatMenuModule,
  MatSelectModule,
  MatSidenavModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';
import { RouterModule } from '@angular/router';
import { CategoryCreationFormComponent } from './components/category-creation-form/category-creation-form.component';
import { CategoryManagementComponent } from './components/category-management/category-management.component';
import { HomeComponent } from './components/home/home.component';
import { TodoListCreationFormComponent } from './components/todo-list-creation-form/todo-list-creation-form.component';
import { TodoListItemComponent } from './components/todo-list-item/todo-list-item.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

@NgModule({
  declarations: [
    TodoListComponent,
    TodoListItemComponent,
    TodoListCreationFormComponent,
    CategoryCreationFormComponent,
    CategoryManagementComponent,
    HomeComponent,
  ],
  exports: [TodoListComponent, HomeComponent],
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
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
        {
          path: 'categories', component: CategoryManagementComponent
        },
        {
          path: '', component: HomeComponent
        },
      ],
      { enableTracing: true }),
  ],
  entryComponents: [
    TodoListComponent,
    TodoListCreationFormComponent,
    TodoListItemComponent,
    CategoryCreationFormComponent,
  ],
})
export class TodoListModule {}
