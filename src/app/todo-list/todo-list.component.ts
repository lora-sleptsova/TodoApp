import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  todos = [
    {
      "name": "todo1",
      "complete": false
    },
    {
      "name": "todo2",
      "complete": true
    },
    {
      "name": "todo3",
      "complete": true
    }
  ]  

  /**
   * addNewTodo
   */
  public addNewTodo() {
    
  }
}
