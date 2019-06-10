import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.sass']
})
export class TodoListItemComponent implements OnInit {

  title: string;
  subtitle: string;

  constructor() { }

  ngOnInit() {
    this.title = 'TODO';
    this.subtitle = 'Grocery';
  }

}
