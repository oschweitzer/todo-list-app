import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TodoListModule} from './todo-list/todo-list.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    TodoListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
