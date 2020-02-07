import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

// eslint-disable-next-line import/no-unresolved

@Component({
  selector: 'todo-list-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private http: HttpClient) {}
}
