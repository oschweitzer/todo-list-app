import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TodoListItemComponent} from './todo-list-item/todo-list-item.component';
import { TodoListContainerComponent } from './todo-list-container/todo-list-container.component';

@NgModule({
  declarations: [TodoListItemComponent, TodoListContainerComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [TodoListContainerComponent]
})
export class TodoListModule { }
