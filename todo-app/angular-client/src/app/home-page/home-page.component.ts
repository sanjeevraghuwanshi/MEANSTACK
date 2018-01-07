import { Component, OnInit } from '@angular/core';

import { TodoService } from '../todo/todo.service';

@Component({
  selector: 'my-home',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  todos: any[] = [];
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos()
      .then(todos => this.todos = todos.todos.reverse().slice(0, 3))
  }

}