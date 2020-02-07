import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'todo-list-app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input() category: string;

  constructor() { }

  ngOnInit() {
  }

}
