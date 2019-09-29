import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {TodoItemComponent} from './todo-item/todo-item.component';
import {TodoLineComponent} from './todo-line/todo-line.component';

@NgModule({
  declarations: [AppComponent, TodoItemComponent, TodoLineComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
