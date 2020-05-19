import { Injectable } from '@angular/core';

@Injectable({
  "providedIn":"root"
})
export class TodoServicesService {
  todos = [
    {
      // "id": 1,
      "name": "todo1",
      "complete": false
    },
    {
      // "id": 2,
      "name": "todo2",
      "complete": true
    },
    {
      // "id": 3,
      "name": "todo3",
      "complete": false
    }

  ];

  constructor() { }

  getTodos(){
    return this.todos;
  }

  removeTodo(id){
    this.todos.splice(id,1);
  }

  addTodo(todoName) {
    // let lastID = this.todos.length;

    let newTodo = {
      // "id": lastID+1,
      "name": todoName,
      "complete": false
    }
    this.todos.push(newTodo);
  }
    
}
