import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@todo-list-workspace/api-interfaces';

@Component({
  selector: 'todo-list-workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private http: HttpClient) {}
}
